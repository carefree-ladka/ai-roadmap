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
    title: "Prerequisites",
    goal: "Set up your machine, tooling, and mental model for AI engineering.",
    estimatedTime: "2–4 days",
    pages: 3,
    stage: 'foundations',
    link: '/docs/00-prerequisites',
    icon: '🧰',
    hue: 210,
  },
  {
    id: '01-python',
    number: '01',
    title: "Python",
    goal: "Production-quality Python — typing, OOP, async, testing — plus DSA and SQL.",
    estimatedTime: "2–3 weeks",
    pages: 24,
    stage: 'foundations',
    link: '/docs/01-python',
    icon: '🐍',
    hue: 150,
  },
  {
    id: '02-fastapi',
    number: '02',
    title: "FastAPI",
    goal: "Build production-ready APIs with validation, auth, databases, and tests.",
    estimatedTime: "4–6 weeks",
    pages: 29,
    stage: 'foundations',
    link: '/docs/02-fastapi',
    icon: '⚡',
    hue: 175,
  },
  {
    id: '03-llm-fundamentals',
    number: '03',
    title: "LLM Fundamentals",
    goal: "Tokens, context windows, attention, decoding, reasoning models, model limits.",
    estimatedTime: "1–2 weeks",
    pages: 6,
    stage: 'foundations',
    link: '/docs/03-llm-fundamentals',
    icon: '🧠',
    hue: 265,
  },
  {
    id: '04-prompt-engineering',
    number: '04',
    title: "Prompt Engineering",
    goal: "Reliable prompts, structured output, hallucination detection, injection.",
    estimatedTime: "1 week",
    pages: 7,
    stage: 'retrieval',
    link: '/docs/04-prompt-engineering',
    icon: '✍️',
    hue: 50,
  },
  {
    id: '05-embeddings-and-semantic-search',
    number: '05',
    title: "Embeddings and Semantic Search",
    goal: "Vectors, similarity metrics, index internals, pgvector, hybrid search.",
    estimatedTime: "1–2 weeks",
    pages: 6,
    stage: 'retrieval',
    link: '/docs/05-embeddings-and-semantic-search',
    icon: '🧭',
    hue: 200,
  },
  {
    id: '06-rag',
    number: '06',
    title: "RAG (Retrieval-Augmented Generation)",
    goal: "Build an end-to-end ingest → retrieve → generate service behind an API.",
    estimatedTime: "1–2 weeks",
    pages: 14,
    stage: 'retrieval',
    link: '/docs/06-rag',
    icon: '🔎',
    hue: 245,
  },
  {
    id: '07-advanced-rag',
    number: '07',
    title: "Advanced RAG",
    goal: "The full pattern catalog — query transforms through agentic retrieval.",
    estimatedTime: "2–3 weeks",
    pages: 9,
    stage: 'retrieval',
    link: '/docs/07-advanced-rag',
    icon: '🎯',
    hue: 320,
  },
  {
    id: '08-llm-application-development',
    number: '08',
    title: "LLM Application Development",
    goal: "One client for any provider, streaming, extraction tasks, and AI UX patterns.",
    estimatedTime: "1–2 weeks",
    pages: 4,
    stage: 'retrieval',
    link: '/docs/08-llm-application-development',
    icon: '🔧',
    hue: 30,
  },
  {
    id: '09-tool-calling-and-ai-agents',
    number: '09',
    title: "Tool Calling and AI Agents",
    goal: "Tool schemas, agent loops, memory, planning, safety and production.",
    estimatedTime: "3–4 weeks",
    pages: 12,
    stage: 'production',
    link: '/docs/09-tool-calling-and-ai-agents',
    icon: '🤖',
    hue: 260,
  },
  {
    id: '10-genai-frameworks-and-ecosystem',
    number: '10',
    title: "GenAI Frameworks and Ecosystem",
    goal: "LangChain, LCEL, LangGraph, LlamaIndex, CrewAI, Pydantic AI — and when to skip them.",
    estimatedTime: "1–2 weeks",
    pages: 21,
    stage: 'production',
    link: '/docs/10-genai-frameworks-and-ecosystem',
    icon: '🔗',
    hue: 190,
  },
  {
    id: '11-mcp',
    number: '11',
    title: "MCP",
    goal: "Expose your tools over the Model Context Protocol, and consume others.",
    estimatedTime: "1 week",
    pages: 7,
    stage: 'production',
    link: '/docs/11-mcp',
    icon: '🔌',
    hue: 95,
  },
  {
    id: '12-evaluation-testing-and-observability',
    number: '12',
    title: "Evaluation, Testing and Observability",
    goal: "Golden datasets, metrics, LLM-as-judge, CI gates, tracing, online evals.",
    estimatedTime: "1–2 weeks",
    pages: 7,
    stage: 'production',
    link: '/docs/12-evaluation-testing-and-observability',
    icon: '📊',
    hue: 125,
  },
  {
    id: '13-production-genai-and-llmops',
    number: '13',
    title: "Production GenAI and LLMOps",
    goal: "GPU serving, queues, gateway, cost, security, model selection, governance.",
    estimatedTime: "3 weeks",
    pages: 11,
    stage: 'production',
    link: '/docs/13-production-genai-and-llmops',
    icon: '🛡️',
    hue: 10,
  },
  {
    id: '14-fine-tuning-and-model-adaptation',
    number: '14',
    title: "Fine-Tuning and Model Adaptation",
    goal: "Whether to fine-tune at all, then LoRA/QLoRA and serving adapters.",
    estimatedTime: "2–3 weeks",
    pages: 8,
    stage: 'production',
    link: '/docs/14-fine-tuning-and-model-adaptation',
    icon: '🎛️',
    hue: 340,
  },
  {
    id: '15-multimodal-genai',
    number: '15',
    title: "Multimodal GenAI",
    goal: "Vision-language models, document intelligence for RAG, voice and realtime.",
    estimatedTime: "1–2 weeks",
    pages: 3,
    stage: 'production',
    link: '/docs/15-multimodal-genai',
    icon: '🖼️',
    hue: 285,
  },
  {
    id: '16-ai-system-design',
    number: '16',
    title: "AI System Design",
    goal: "Whiteboard AI architectures, defend tradeoffs, size capacity and cost.",
    estimatedTime: "1–2 weeks",
    pages: 7,
    stage: 'production',
    link: '/docs/16-ai-system-design',
    icon: '🏛️',
    hue: 45,
  },
  {
    id: '17-interview-roadmaps',
    number: '17',
    title: "AI Interview Roadmaps",
    goal: "Topic-by-topic prep across LLMs, RAG, agents, evals, LLMOps, security.",
    estimatedTime: "Ongoing",
    pages: 21,
    stage: 'production',
    link: '/docs/17-interview-roadmaps',
    icon: '🎓',
    hue: 75,
  },
];

export const TOTAL_SECTIONS = SECTIONS.length;

export const TOTAL_PAGES = SECTIONS.reduce((n, s) => n + s.pages, 0);

export const sectionsByStage = (stage: StageId): RoadmapSection[] =>
  SECTIONS.filter((s) => s.stage === stage);

// localStorage key that stores an array of completed section ids.
export const PROGRESS_STORAGE_KEY = 'ai-roadmap:progress:v1';

/**
 * Section folders renamed to match the twelve-phase syllabus topic names.
 * Saved progress is keyed by section id, so stored ids are migrated on read
 * rather than silently showing a completed section as unstarted. Safe to drop
 * once no browser can still be holding the old ids.
 */
export const RENAMED_SECTION_IDS: Record<string, string> = {
  '05-embeddings-semantic-search': '05-embeddings-and-semantic-search',
  '08-llm-app-development': '08-llm-application-development',
  '09-agents': '09-tool-calling-and-ai-agents',
  '10-genai-frameworks': '10-genai-frameworks-and-ecosystem',
  '12-evaluation': '12-evaluation-testing-and-observability',
  '13-production-llmops': '13-production-genai-and-llmops',
  '14-fine-tuning': '14-fine-tuning-and-model-adaptation',
  '15-multimodal': '15-multimodal-genai',
};
