import { useCallback, useEffect, useState } from "react";
import { PROGRESS_STORAGE_KEY, RENAMED_SECTION_IDS } from "./sections";

// Custom event name so multiple ProgressToggle / Progress page instances
// stay in sync within the same tab (the native 'storage' event only fires
// in *other* tabs).
const PROGRESS_EVENT = "ai-roadmap:progress-changed";

function readProgress(): string[] {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    const ids = parsed.filter((x): x is string => typeof x === "string");

    // Migrate ids for sections whose folder was renamed, then persist so the
    // mapping only has to happen once per browser.
    const migrated = Array.from(
      new Set(ids.map((id) => RENAMED_SECTION_IDS[id] ?? id)),
    );
    if (
      migrated.length !== ids.length ||
      migrated.some((id, i) => id !== ids[i])
    ) {
      window.localStorage.setItem(
        PROGRESS_STORAGE_KEY,
        JSON.stringify(migrated),
      );
    }
    return migrated;
  } catch {
    return [];
  }
}

function writeProgress(ids: string[]): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
}

/**
 * SSR-safe progress hook. Returns the set of completed section ids and
 * helpers to toggle / set completion. Starts empty on the server and during
 * the first client render, then hydrates from localStorage in an effect so
 * server and client markup match.
 */
export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCompleted(readProgress());
    setHydrated(true);

    const sync = () => setCompleted(readProgress());
    window.addEventListener(PROGRESS_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const isComplete = useCallback(
    (id: string) => completed.includes(id),
    [completed],
  );

  const toggle = useCallback((id: string) => {
    const current = readProgress();
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id];
    writeProgress(next);
    setCompleted(next);
  }, []);

  const setComplete = useCallback((id: string, value: boolean) => {
    const current = readProgress();
    const has = current.includes(id);
    if (value === has) {
      return;
    }
    const next = value ? [...current, id] : current.filter((x) => x !== id);
    writeProgress(next);
    setCompleted(next);
  }, []);

  return { completed, isComplete, toggle, setComplete, hydrated };
}
