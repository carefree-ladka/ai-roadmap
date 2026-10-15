import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  SECTIONS,
  STAGES,
  TOTAL_PAGES,
  TOTAL_SECTIONS,
  sectionsByStage,
} from '@site/src/components/roadmap/sections';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { CSSProperties, ReactNode } from 'react';

import styles from './index.module.css';

const STATS = [
  { value: String(TOTAL_SECTIONS), label: 'sections' },
  { value: String(TOTAL_PAGES), label: 'lesson pages' },
  { value: '20', label: 'week plan' },
  { value: '0', label: 'API keys needed' },
];

/** The request path your project ends up serving, drawn as a trace. */
const PIPELINE = [
  { step: 'POST /ingest', detail: 'load + chunk' },
  { step: 'embed', detail: 'nomic-embed-text' },
  { step: 'Chroma', detail: 'persist vectors' },
  { step: 'POST /ask', detail: 'retrieve + rerank' },
  { step: 'Ollama', detail: 'generate' },
  { step: '200 OK', detail: 'answer + citations' },
];

const PRINCIPLES = [
  {
    tag: 'local-first',
    title: 'Runs on hardware you own',
    body: 'Ollama and Chroma on your machine. No API keys, no per-token bill, no data leaving your laptop — so you can experiment without watching a meter.',
  },
  {
    tag: 'one-project',
    title: 'One project, grown not restarted',
    body: 'The same FastAPI service carries through every section. By the end it has retrieval, reranking, guardrails, structured logs, tests, and a Dockerfile.',
  },
  {
    tag: 'depth',
    title: 'Depth where it counts',
    body: 'Twenty-nine pages on FastAPI alone, fourteen on RAG. Chunking, hybrid search, and reranking get their own pages because that is where RAG demos fall over.',
  },
  {
    tag: 'interview',
    title: 'Built to be explained',
    body: 'Every section closes with interview relevance and a Done When checklist, and section 14 is a topic-by-topic prep layer over everything you built.',
  },
];

const ENTRY_POINTS = [
  { when: 'New to Python', to: '/docs/00-prerequisites', label: '00 · Prerequisites' },
  { when: 'Know Python, not backend', to: '/docs/02-fastapi', label: '02 · FastAPI' },
  { when: 'Ship backends already', to: '/docs/03-local-llms-ollama', label: '03 · Local LLMs' },
  { when: 'Used LLM APIs, not RAG', to: '/docs/04-embeddings-vector-db', label: '04 · Embeddings' },
  { when: 'RAG demo that underperforms', to: '/docs/06-advanced-rag', label: '06 · Advanced RAG' },
  { when: 'Shipping but cannot measure it', to: '/docs/11-evaluation', label: '11 · Evaluation' },
  { when: 'Interview next week', to: '/docs/15-ai-roadmaps', label: '15 · Interview Roadmaps' },
];

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className={clsx('container', styles.heroInner)}>
        <p className={styles.eyebrow}>
          Python <span aria-hidden="true">→</span> FastAPI{' '}
          <span aria-hidden="true">→</span> Production RAG
        </p>

        <Heading as="h1" className={styles.heroTitle}>
          Local-First <mark className={styles.mark}>AI Engineer</mark> Roadmap
        </Heading>

        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>

        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="/docs">
            Start here
          </Link>
          <Link className={clsx('button button--lg', styles.ghostButton)} to="/progress">
            Track progress
          </Link>
        </div>

        <dl className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statValue}>{s.value}</dt>
              <dd className={styles.statLabel}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

function Pipeline() {
  return (
    <section className={styles.pipelineSection}>
      <div className="container">
        <div className={styles.pipelinePanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelLabel}>the service you end up with</span>
            <span className={styles.panelDots} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>

          <ol className={styles.pipeline}>
            {PIPELINE.map((node, i) => (
              <li key={node.step} className={styles.pipelineNode}>
                <span className={styles.nodeIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.nodeStep}>{node.step}</span>
                <span className={styles.nodeDetail}>{node.detail}</span>
              </li>
            ))}
          </ol>

          <p className={styles.panelFoot}>
            Built once, in section 05 — then hardened, measured, and defended
            across sections 06 through 14.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionCard({ section }: { section: (typeof SECTIONS)[number] }) {
  return (
    <Link
      to={section.link}
      className={styles.card}
      style={{ ['--card-hue' as string]: `${section.hue}` } as CSSProperties}>
      <span className={styles.cardGlow} aria-hidden="true" />
      <div className={styles.cardTop}>
        <span className={styles.cardIcon} aria-hidden="true">
          {section.icon}
        </span>
        <span className={styles.cardNumber}>{section.number}</span>
      </div>
      <Heading as="h4" className={styles.cardTitle}>
        {section.title}
      </Heading>
      <p className={styles.cardGoal}>{section.goal}</p>
      <div className={styles.cardFooter}>
        <span className={styles.cardMeta}>
          {section.pages > 0 ? `${section.pages} pages · ` : ''}
          {section.estimatedTime}
        </span>
        <span className={styles.cardArrow} aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}

function Roadmap() {
  return (
    <section className={styles.section} id="roadmap">
      <div className="container">
        <p className={styles.kicker}>the roadmap</p>
        <Heading as="h2" className={styles.sectionTitle}>
          Three arcs, {TOTAL_SECTIONS} sections, one continuous path
        </Heading>
        <p className={styles.sectionSub}>
          Read a section index first — each one states its goal, prerequisites,
          and a checklist for deciding you are actually done.
        </p>

        {STAGES.map((stage) => (
          <div key={stage.id} className={styles.stage}>
            <div className={styles.stageHeader}>
              <Heading as="h3" className={styles.stageTitle}>
                {stage.label}
              </Heading>
              <p className={styles.stageBlurb}>{stage.blurb}</p>
            </div>
            <div className={styles.grid}>
              {sectionsByStage(stage.id).map((section) => (
                <SectionCard key={section.id} section={section} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <p className={styles.kicker}>why it is built this way</p>
        <Heading as="h2" className={styles.sectionTitle}>
          Opinionated on purpose
        </Heading>
        <div className={styles.principles}>
          {PRINCIPLES.map((p) => (
            <article key={p.tag} className={styles.principle}>
              <span className={styles.principleTag}>{p.tag}</span>
              <Heading as="h3" className={styles.principleTitle}>
                {p.title}
              </Heading>
              <p className={styles.principleBody}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JumpIn() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.kicker}>skip ahead</p>
        <Heading as="h2" className={styles.sectionTitle}>
          Not everyone starts at zero
        </Heading>
        <p className={styles.sectionSub}>
          Pick the row that sounds like you. You can always backfill later — each
          section lists what it assumes you already know.
        </p>
        <ul className={styles.entryList}>
          {ENTRY_POINTS.map((e) => (
            <li key={e.to} className={styles.entryItem}>
              <span className={styles.entryWhen}>{e.when}</span>
              <span className={styles.entryTrace} aria-hidden="true" />
              <Link to={e.to} className={styles.entryLink}>
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.ctaSection}>
      <div className={clsx('container', styles.cta)}>
        <Heading as="h2" className={styles.ctaTitle}>
          Pick a section and start building
        </Heading>
        <p className={styles.ctaBody}>
          Nothing to install first beyond Python and Ollama, nothing to sign up
          for, and no bill at the end of the month.
        </p>
        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="/docs">
            Start here
          </Link>
          <Link className={clsx('button button--lg', styles.ghostButton)} to="/docs/pacing">
            See the 20-week plan
          </Link>
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
      description="From Python fundamentals to production RAG — one place to learn it all. Runs entirely on your own machine.">
      <Hero />
      <main>
        <Pipeline />
        <Roadmap />
        <Principles />
        <JumpIn />
        <FinalCta />
      </main>
    </Layout>
  );
}
