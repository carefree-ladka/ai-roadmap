import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkLineNumbers from './plugins/remark-line-numbers.mjs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Local-First AI Engineer Roadmap',
  tagline:
    'From Python fundamentals to production RAG — one place to learn it all',
  favicon: 'img/favicon.ico',

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

  // Preconnect + load web fonts (Inter for text, Newsreader for headings,
  // JetBrains Mono for code). NOTE: this used to load Space Grotesk —
  // updated to match the current theme's heading font (custom.css sets
  // --ifm-heading-font-family to Newsreader, so it needs to be loaded here
  // or it silently falls back to Georgia).
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
    'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
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
        {to: '/progress', label: 'Progress', position: 'left'},
        {to: '/docs/pacing', label: 'Pacing', position: 'left'},
        {
          href: 'https://github.com/carefree-ladka/ai-roadmap',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Roadmap', to: '/docs/00-prerequisites'},
            {label: 'Python', to: '/docs/01-python'},
            {label: 'FastAPI', to: '/docs/02-fastapi'},
          ],
        },
        {
          title: 'Track',
          items: [
            {label: 'Progress', to: '/progress'},
            {label: 'Pacing', to: '/docs/pacing'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/carefree-ladka/ai-roadmap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Local-First AI Engineer Roadmap. Built with Docusaurus.`,
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
