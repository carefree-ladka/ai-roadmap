# Local-First AI Engineer Roadmap

A structured, self-paced curriculum that takes you from Python fundamentals all the way to production-grade Retrieval-Augmented Generation (RAG) and agentic AI systems — with an emphasis on running things locally.

The site is built with [Docusaurus](https://docusaurus.io/) and served as a static website. Content lives in `docs/` as Markdown/MDX.

## What's inside

The roadmap is organized as a sequence of modules under `docs/`:

| Module | Topic |
| --- | --- |
| `00-prerequisites` | Python tooling, core AI concepts, environment setup |
| `01-python` | Python from basics to backend patterns |
| `02-fastapi` | Building APIs with FastAPI |
| `03-local-llms-ollama` | Running LLMs locally with Ollama |
| `04-embeddings-vector-db` | Embeddings and vector databases |
| `05-rag-fundamentals` | Core RAG concepts and pipelines |
| `06-advanced-rag` | Advanced retrieval and RAG techniques |
| `07-langchain-lcel` | LangChain and LCEL |
| `08-agentic-ai` | Agents and agentic workflows |
| `09-production-patterns` | Production concerns and patterns |
| `10-system-design-interview` | System design for AI interviews |
| `11-optional-extensions` | Optional deep-dive topics |

There's also a **Progress** tracker and a **Pacing** guide (`docs/pacing.mdx`) to help you plan how you move through the material.

### Site features

- Offline local search (no external service)
- Mermaid diagrams for architecture and system design
- Line numbers on code blocks by default
- Dark mode by default, respecting your system preference

## Prerequisites

- [Node.js](https://nodejs.org/) `>= 20`
- A package manager (`npm`, `yarn`, or `pnpm`)

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

To preview the production build locally:

```bash
npm run serve
```

## Type checking

```bash
npm run typecheck
```

## Editing content

- Roadmap content lives in `docs/`, one folder per module.
- Sidebar structure is configured in `sidebars.ts`.
- Site configuration (title, navbar, footer, theme) lives in `docusaurus.config.ts`.
- Custom styles are in `src/css/custom.css`.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
