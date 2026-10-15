// Single source of truth for the roadmap sections.
// Used by the homepage cards, the /progress page, and the ProgressToggle.

/** The three arcs the roadmap moves through, used to group the cards. */
export type StageId = 'foundations' | 'retrieval' | 'production';

export interface RoadmapStage {
  id: StageId;
  /** Short label, e.g. "Foundations". */
  label: string;
  /** One line on what this arc gets you. */
  blurb: string;
}

export const STAGES: RoadmapStage[] = [
  {
    id: 'foundations',
    label: 'Foundations',
    blurb:
      'The language and the service layer. Everything after this assumes you can ship a clean, tested API.',
  },
  {
    id: 'retrieval',
    label: 'Models & Retrieval',
    blurb:
      'Run models locally, turn documents into vectors, and build retrieval that measurably improves.',
  },
  {
    id: 'production',
    label: 'Production & Interview',
    blurb:
      'Make it observable, deployable, and defensible — then be ready to talk through every decision.',
  },
];

export interface RoadmapSection {
  /** Stable id used as the localStorage progress key. */
  id: string;
  /** Two-digit display number, e.g. "01". */
  number: string;
  /** Human readable title. */
  title: string;
  /** One-line goal shown on cards. */
  goal: string;
  /** Rough estimated time to complete. */
  estimatedTime: string;
  /** Number of lesson pages in the section (excludes the index page). */
  pages: number;
  /** Which arc of the roadmap this belongs to. */
  stage: StageId;
  /** Link to the section index page. */
  link: string;
  /** Emoji icon for cards / progress. */
  icon: string;
  /** Accent hue (deg) used for gradients per card. */
  hue: number;
}

export const SECTIONS: RoadmapSection[] = [
  {
    id: '00-prerequisites',
    number: '00',
    title: 'Prerequisites',
    goal: 'Set up your machine, tooling, and mental model for AI engineering.',
    estimatedTime: '2–4 days',
    pages: 3,
    stage: 'foundations',
    link: '/docs/00-prerequisites',
    icon: '🧰',
    hue: 210,
  },
  {
    id: '01-python',
    number: '01',
    title: 'Python',
    goal: 'Production-quality Python — typing, OOP, async, testing — plus DSA and SQL.',
    estimatedTime: '2–3 weeks',
    pages: 24,
    stage: 'foundations',
    link: '/docs/01-python',
    icon: '🐍',
    hue: 150,
  },
  {
    id: '02-fastapi',
    number: '02',
    title: 'FastAPI',
    goal: 'Build production-ready APIs with validation, auth, databases, and tests.',
    estimatedTime: '4–6 weeks',
    pages: 29,
    stage: 'foundations',
    link: '/docs/02-fastapi',
    icon: '⚡',
    hue: 175,
  },
  {
    id: '03-local-llms-ollama',
    number: '03',
    title: 'Local LLMs / Ollama',
    goal: 'Run local models with Ollama, then size GPUs, quantize, and swap backends.',
    estimatedTime: '3–5 days',
    pages: 8,
    stage: 'retrieval',
    link: '/docs/03-local-llms-ollama',
    icon: '🦙',
    hue: 30,
  },
  {
    id: '04-embeddings-vector-db',
    number: '04',
    title: 'Embeddings / Vector DB',
    goal: 'Embeddings, index internals, Chroma and pgvector, and running a store in production.',
    estimatedTime: '4–6 days',
    pages: 6,
    stage: 'retrieval',
    link: '/docs/04-embeddings-vector-db',
    icon: '🧭',
    hue: 265,
  },
  {
    id: '05-rag-fundamentals',
    number: '05',
    title: 'RAG Fundamentals',
    goal: 'Build an end-to-end ingest → retrieve → generate pipeline behind an API.',
    estimatedTime: '1–2 weeks',
    pages: 14,
    stage: 'retrieval',
    link: '/docs/05-rag-fundamentals',
    icon: '🔎',
    hue: 245,
  },
  {
    id: '06-advanced-rag',
    number: '06',
    title: 'Advanced RAG',
    goal: 'Hybrid search, reranking, query rewriting, and self-correcting and agentic RAG.',
    estimatedTime: '1–2 weeks',
    pages: 9,
    stage: 'retrieval',
    link: '/docs/06-advanced-rag',
    icon: '🎯',
    hue: 320,
  },
  {
    id: '07-langchain-lcel',
    number: '07',
    title: 'LangChain & LlamaIndex',
    goal: 'Compose chains, memory, and agents with LCEL — and know when to skip it.',
    estimatedTime: '1–2 weeks',
    pages: 20,
    stage: 'retrieval',
    link: '/docs/07-langchain-lcel',
    icon: '🔗',
    hue: 190,
  },
  {
    id: '08-agentic-ai',
    number: '08',
    title: 'Agents & Agentic AI',
    goal: 'LangGraph agents, tools and MCP, memory, safety, and running them in production.',
    estimatedTime: '3–4 weeks',
    pages: 12,
    stage: 'production',
    link: '/docs/08-agentic-ai',
    icon: '🤖',
    hue: 260,
  },
  {
    id: '09-mcp',
    number: '09',
    title: 'MCP',
    goal: 'Expose your tools over the Model Context Protocol, and consume other people\u2019s.',
    estimatedTime: '1 week',
    pages: 7,
    stage: 'production',
    link: '/docs/09-mcp',
    icon: '🔌',
    hue: 200,
  },
  {
    id: '10-production-patterns',
    number: '10',
    title: 'Production Patterns',
    goal: 'Add logging, guardrails, caching, and deployment to your service.',
    estimatedTime: '1–2 weeks',
    pages: 3,
    stage: 'production',
    link: '/docs/10-production-patterns',
    icon: '🛡️',
    hue: 10,
  },
  {
    id: '11-evaluation',
    number: '11',
    title: 'Evaluation',
    goal: 'Make quality measurable — datasets, metrics, judges, CI gates, and online evals.',
    estimatedTime: '1–2 weeks',
    pages: 7,
    stage: 'production',
    link: '/docs/11-evaluation',
    icon: '📊',
    hue: 125,
  },
  {
    id: '12-fine-tuning',
    number: '12',
    title: 'Fine-Tuning',
    goal: 'Decide whether to fine-tune at all, then run LoRA/QLoRA end to end.',
    estimatedTime: '2–3 weeks',
    pages: 8,
    stage: 'production',
    link: '/docs/12-fine-tuning',
    icon: '🎛️',
    hue: 340,
  },
  {
    id: '13-system-design-interview',
    number: '13',
    title: 'System Design & Interview',
    goal: 'Whiteboard AI/RAG architectures and defend the tradeoffs out loud.',
    estimatedTime: '1–2 weeks',
    pages: 6,
    stage: 'production',
    link: '/docs/13-system-design-interview',
    icon: '🏛️',
    hue: 45,
  },
  {
    id: '14-optional-extensions',
    number: '14',
    title: 'Optional Extensions',
    goal: 'Explore multimodal RAG, GraphRAG, streaming UIs, and query transforms.',
    estimatedTime: 'Ongoing',
    pages: 0,
    stage: 'production',
    link: '/docs/14-optional-extensions',
    icon: '🚀',
    hue: 285,
  },
  {
    id: '15-ai-roadmaps',
    number: '15',
    title: 'AI Interview Roadmaps',
    goal: 'Topic-by-topic prep: LLMs, prompting, RAG, agents, evals, LLMOps, security.',
    estimatedTime: 'Ongoing',
    pages: 21,
    stage: 'production',
    link: '/docs/15-ai-roadmaps',
    icon: '🎓',
    hue: 95,
  },
];

export const TOTAL_SECTIONS = SECTIONS.length;

export const TOTAL_PAGES = SECTIONS.reduce((n, s) => n + s.pages, 0);

export const sectionsByStage = (stage: StageId): RoadmapSection[] =>
  SECTIONS.filter((s) => s.stage === stage);

// localStorage key that stores an array of completed section ids.
export const PROGRESS_STORAGE_KEY = 'ai-roadmap:progress:v1';
