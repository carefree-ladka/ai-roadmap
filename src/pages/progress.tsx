import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { SECTIONS, TOTAL_SECTIONS } from '@site/src/components/roadmap/sections';
import { useProgress } from '@site/src/components/roadmap/useProgress';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { CSSProperties, ReactNode } from 'react';
import styles from './progress.module.css';

function ProgressInner(): ReactNode {
  const { isComplete, toggle, completed, hydrated } = useProgress();
  const doneCount = completed.filter((id) =>
    SECTIONS.some((s) => s.id === id),
  ).length;
  const pct = Math.round((doneCount / TOTAL_SECTIONS) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.count}>
          {hydrated ? doneCount : 0} / {TOTAL_SECTIONS} sections complete
        </div>
        <div
          className={styles.barOuter}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={TOTAL_SECTIONS}
          aria-valuenow={hydrated ? doneCount : 0}>
          <div
            className={styles.barInner}
            style={{ width: `${hydrated ? pct : 0}%` }}
          />
        </div>
        <div className={styles.pct}>{hydrated ? pct : 0}% complete</div>
      </div>

      <ul className={styles.list}>
        {SECTIONS.map((section) => {
          const done = hydrated && isComplete(section.id);
          return (
            <li key={section.id} className={styles.item} data-done={done}>
              <div className={styles.itemMain}>
                <span
                  className={styles.itemIcon}
                  style={
                    { ['--card-hue' as string]: `${section.hue}` } as CSSProperties
                  }
                  aria-hidden="true">
                  {section.icon}
                </span>
                <div>
                  <Link to={section.link} className={styles.itemTitle}>
                    <span className={styles.itemNumber}>{section.number}</span>
                    {section.title}
                  </Link>
                  <div className={styles.itemGoal}>{section.goal}</div>
                </div>
              </div>
              <div className={styles.itemActions}>
                <span
                  className={styles.status}
                  data-done={done ? 'true' : 'false'}>
                  {done ? '✅ Completed' : '⬜ Not started'}
                </span>
                <button
                  type="button"
                  className={styles.toggle}
                  disabled={!hydrated}
                  onClick={() => toggle(section.id)}>
                  {done ? 'Unmark' : 'Mark done'}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <p className={styles.note}>
        Progress is stored locally in your browser (localStorage). It never
        leaves your machine and there is no account or backend.
      </p>
    </div>
  );
}

export default function ProgressPage(): ReactNode {
  return (
    <Layout
      title="Progress"
      description="Track your progress through the Local-First AI Engineer Roadmap.">
      <main className="container margin-vert--lg">
        <Heading as="h1">Your Roadmap Progress</Heading>
        <p>
          Mark sections complete as you finish them. Everything is stored in
          your browser only.
        </p>
        <BrowserOnly fallback={<p>Loading progress…</p>}>
          {() => <ProgressInner />}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
