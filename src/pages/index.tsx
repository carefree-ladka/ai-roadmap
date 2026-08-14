import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { SECTIONS } from '@site/src/components/roadmap/sections';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { CSSProperties, ReactNode } from 'react';

import styles from './index.module.css';

const HIGHLIGHTS = [
  { icon: '🔒', label: 'Local-first · private' },
  { icon: '🧩', label: '12 guided sections' },
  { icon: '🛠️', label: 'One evolving RAG project' },
  { icon: '💬', label: 'Interview-ready' },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={clsx('container', styles.heroInner)}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} /> Python → FastAPI → Production RAG
        </span>
        <Heading as="h1" className={styles.heroTitle}>
          Local-First <span className={styles.gradientText}>AI Engineer</span>{' '}
          Roadmap
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/00-prerequisites">
            Start Learning →
          </Link>
          <Link
            className={clsx('button button--lg', styles.ghostButton)}
            to="/progress">
            Track Progress
          </Link>
        </div>
        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((h) => (
            <li key={h.label} className={styles.highlight}>
              <span aria-hidden="true">{h.icon}</span> {h.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function SectionCards() {
  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          The Roadmap
        </Heading>
        <p className={styles.sectionSub}>
          One coherent path from language fundamentals to a deployed,
          production-grade retrieval-augmented generation service.
        </p>
        <div className={styles.grid}>
          {SECTIONS.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className={styles.card}
              style={
                {
                  ['--card-hue' as string]: `${section.hue}`,
                } as CSSProperties
              }>
              <div className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.cardTop}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {section.icon}
                </span>
                <span className={styles.cardNumber}>{section.number}</span>
              </div>
              <Heading as="h3" className={styles.cardTitle}>
                {section.title}
              </Heading>
              <p className={styles.cardGoal}>{section.goal}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardTime}>⏱ {section.estimatedTime}</span>
                <span className={styles.cardArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="From Python fundamentals to production RAG — one place to learn it all.">
      <HomepageHeader />
      <main>
        <SectionCards />
      </main>
    </Layout>
  );
}
