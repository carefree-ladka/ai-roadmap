import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { SECTIONS } from '@site/src/components/roadmap/sections';
import { useProgress } from '@site/src/components/roadmap/useProgress';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface ProgressToggleProps {
  /** Section id, e.g. "01-python". Must match an id in sections.ts. */
  sectionId: string;
}

function ToggleInner({ sectionId }: ProgressToggleProps): ReactNode {
  const { isComplete, toggle, hydrated } = useProgress();
  const section = SECTIONS.find((s) => s.id === sectionId);
  const label = section ? section.title : sectionId;
  const done = isComplete(sectionId);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        data-done={done ? 'true' : 'false'}
        aria-pressed={done}
        // Avoid a hydration flash: keep it neutral until localStorage is read.
        disabled={!hydrated}
        onClick={() => toggle(sectionId)}>
        <span className={styles.icon} aria-hidden="true">
          {done ? '✅' : '⬜'}
        </span>
        <span>
          {done
            ? `Completed: ${label}`
            : `Mark "${label}" as complete`}
        </span>
      </button>
      <Link className={styles.link} to="/progress">
        View overall progress →
      </Link>
    </div>
  );
}

/**
 * Client-side progress toggle. SSR-safe via BrowserOnly so it never runs
 * localStorage access during the server build.
 */
export default function ProgressToggle(props: ProgressToggleProps): ReactNode {
  return (
    <BrowserOnly
      fallback={
        <div className={styles.wrapper}>
          <button type="button" className={styles.button} disabled>
            <span className={styles.icon} aria-hidden="true">
              ⬜
            </span>
            <span>Loading progress…</span>
          </button>
        </div>
      }>
      {() => <ToggleInner {...props} />}
    </BrowserOnly>
  );
}
