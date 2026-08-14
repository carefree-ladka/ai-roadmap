// Single source of truth for the roadmap sections.
// Used by the homepage cards, the /progress page, and the ProgressToggle.

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
    link: '/docs/00-prerequisites',
    icon: '🧰',
    hue: 210,
  },
  {
    id: '01-python',
    number: '01',
    title: 'Python',
    goal: 'Write production-quality Python: typing, OOP, async, testing.',
    estimatedTime: '2–3 weeks',
    link: '/docs/01-python',
    icon: '🐍',
    hue: 150,
  },
  {
    id: '02-fastapi',
    number: '02',
    title: 'FastAPI',
    goal: 'Build production-ready APIs with validation, auth, and databases.',
    estimatedTime: '2–3 weeks',
    link: '/docs/02-fastapi',
    icon: '⚡',
    hue: 175,
  },
  {
    id: '03-local-llms-ollama',
    number: '03',
    title: 'Local LLMs / Ollama',
    goal: 'Run and call local models with Ollama from Python.',
    estimatedTime: '3–5 days',
    link: '/docs/03-local-llms-ollama',
    icon: '🦙',
    hue: 30,
  },
  {
    id: '04-embeddings-vector-db',
    number: '04',
    title: 'Embeddings / Vector DB',
    goal: 'Turn text into vectors and store/search them in Chroma.',
    estimatedTime: '4–6 days',
    link: '/docs/04-embeddings-vector-db',
    icon: '🧭',
    hue: 265,
  },
  {
    id: '05-rag-fundamentals',
    number: '05',
    title: 'RAG Fundamentals',
    goal: 'Build an end-to-end ingest → retrieve → generate pipeline.',
    estimatedTime: '1 week',
    link: '/docs/05-rag-fundamentals',
    icon: '🔎',
    hue: 245,
  },
  {
    id: '06-advanced-rag',
    number: '06',
    title: 'Advanced RAG',
    goal: 'Improve retrieval with chunking, hybrid search, reranking, evals.',
    estimatedTime: '1–2 weeks',
    link: '/docs/06-advanced-rag',
    icon: '🎯',
    hue: 320,
  },
  {
    id: '07-langchain-lcel',
    number: '07',
    title: 'LangChain / LCEL',
    goal: 'Compose chains, memory, and agents with LCEL.',
    estimatedTime: '1 week',
    link: '/docs/07-langchain-lcel',
    icon: '🔗',
    hue: 190,
  },
  {
    id: '08-agentic-ai',
    number: '08',
    title: 'Agents & Agentic AI',
    goal: 'Build agents with LangGraph and understand how Kiro, Q, ChatGPT & Gemini work.',
    estimatedTime: '2–3 weeks',
    link: '/docs/08-agentic-ai',
    icon: '🤖',
    hue: 260,
  },
  {
    id: '09-production-patterns',
    number: '09',
    title: 'Production Patterns',
    goal: 'Add logging, guardrails, caching, and deployment concepts.',
    estimatedTime: '1–2 weeks',
    link: '/docs/09-production-patterns',
    icon: '🛡️',
    hue: 10,
  },
  {
    id: '10-system-design-interview',
    number: '10',
    title: 'System Design & Interview',
    goal: 'Explain AI/RAG architectures and answer interview questions.',
    estimatedTime: '1–2 weeks',
    link: '/docs/10-system-design-interview',
    icon: '🏛️',
    hue: 45,
  },
  {
    id: '11-optional-extensions',
    number: '11',
    title: 'Optional Extensions',
    goal: 'Explore multimodal, fine-tuning, GraphRAG, and more.',
    estimatedTime: 'Ongoing',
    link: '/docs/11-optional-extensions',
    icon: '🚀',
    hue: 285,
  },
];

export const TOTAL_SECTIONS = SECTIONS.length;

// localStorage key that stores an array of completed section ids.
export const PROGRESS_STORAGE_KEY = 'ai-roadmap:progress:v1';
