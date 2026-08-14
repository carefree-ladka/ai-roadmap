// Forces `showLineNumbers` on every fenced code block, so you don't have
// to add it by hand to each ```lang fence in your docs.
//
// Usage in docusaurus.config.ts:
//   import remarkLineNumbers from './plugins/remark-line-numbers.mjs';
//   ...
//   markdown: {
//     mermaid: true,
//     hooks: { onBrokenMarkdownLinks: 'warn' },
//   },
//   presets: [[ 'classic', {
//     docs: {
//       remarkPlugins: [remarkLineNumbers],
//       ...
//     },
//   }]]
//
// To opt a single block OUT, add `showLineNumbers=false` to its fence meta.

import { visit } from 'unist-util-visit';

export default function remarkLineNumbers() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      const meta = node.meta || '';
      if (meta.includes('showLineNumbers')) return; // already set explicitly
      node.meta = meta ? `${meta} showLineNumbers` : 'showLineNumbers';
    });
  };
}
