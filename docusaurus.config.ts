import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkLineNumbers from './plugins/remark-line-numbers.mjs';
import { SOCIALS } from './src/data/socials';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Local-First AI Engineer Roadmap',
  tagline:
    'From Python fundamentals to production RAG — one place to learn it all',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://carefree-ladka.github.io',
  // Served from a GitHub project page, so the base path is the repo name.
  baseUrl: '/ai-roadmap/',

  // GitHub Pages deployment config.
  organizationName: 'carefree-ladka', // GitHub org/user.
  projectName: 'ai-roadmap', // Repo name.
  trailingSlash: false,

  // Preconnect + load web fonts.
  //
  // Headings and body both use SF Pro Display (see --ra-font-sf in
  // custom.css). SF Pro is deliberately NOT loaded here: Apple ships it
  // as a system-only face and its license doesn't cover web embedding,
  // so it's resolved locally via -apple-system / system-ui instead.
  //
  // That leaves two fonts to actually fetch:
  //   Inter          — the non-Apple fallback for SF Pro Display
  //   JetBrains Mono — code blocks and small technical labels
  //
  // Newsreader used to be loaded here for serif headings; it was dropped
  // when headings moved to SF Pro Display, since nothing referenced it
  // any more and it was a wasted font download.
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
  ],

  // Production build must fail on broken internal links.
  onBrokenLinks: 'throw',

  // Enable Mermaid diagrams for architecture / system design.
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      // Local search (offline, no external service).
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Point the "edit this page" links at a placeholder repo.
          editUrl: 'https://github.com/carefree-ladka/ai-roadmap/tree/main/',
          // Turns on line numbers for every code fence by default —
          // see plugins/remark-line-numbers.mjs. Remove this line if you'd
          // rather opt in per-block with ```lang showLineNumbers instead.
          remarkPlugins: [remarkLineNumbers],
        },
        // Blog is not part of this learning site.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Engineer Roadmap',
      logo: {
        alt: 'Local-First AI Engineer Roadmap',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'roadmapSidebar',
          position: 'left',
          label: 'Roadmap',
        },
        {to: '/docs', label: 'Start Here', position: 'left'},
        {to: '/docs/17-interview-roadmaps', label: 'Interview Prep', position: 'left'},
        {to: '/progress', label: 'Progress', position: 'left'},
        {to: '/docs/pacing', label: 'Pacing', position: 'left'},
        {
          // Icon row for the author's profiles. Rendered by
          // src/components/SocialLinks, registered as a navbar item type in
          // src/theme/NavbarItem/ComponentTypes.tsx. Links live in
          // src/data/socials.ts so the footer can reuse them.
          type: 'custom-socialLinks',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Start Here', to: '/docs'},
            {label: 'Prerequisites', to: '/docs/00-prerequisites'},
            {label: 'Python', to: '/docs/01-python'},
            {label: 'FastAPI', to: '/docs/02-fastapi'},
          ],
        },
        {
          title: 'Build',
          items: [
            {label: 'LLM Fundamentals', to: '/docs/03-llm-fundamentals'},
            {label: 'Prompt Engineering', to: '/docs/04-prompt-engineering'},
            {label: 'RAG', to: '/docs/06-rag'},
            {label: 'Advanced RAG', to: '/docs/07-advanced-rag'},
            {label: 'Tool Calling and AI Agents', to: '/docs/09-tool-calling-and-ai-agents'},
          ],
        },
        {
          title: 'Prepare',
          items: [
            {label: 'System Design', to: '/docs/16-ai-system-design'},
            {label: 'AI Interview Roadmaps', to: '/docs/17-interview-roadmaps'},
            {label: 'Progress', to: '/progress'},
            {label: 'Pacing Plan', to: '/docs/pacing'},
          ],
        },
        {
          title: 'Elsewhere',
          items: [
            {
              label: 'Repository',
              href: 'https://github.com/carefree-ladka/ai-roadmap',
            },
            // Same profiles as the navbar icon row — shared so the two can't
            // drift apart.
            ...SOCIALS.map(({label, href}) => ({label, href})),
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Local-First AI Engineer Roadmap`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml', 'docker'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
