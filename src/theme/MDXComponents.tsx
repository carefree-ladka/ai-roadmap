import MDXComponents from '@theme-original/MDXComponents';
import ProgressToggle from '@site/src/components/ProgressToggle';

// Make <ProgressToggle /> available in every .mdx file without an import.
export default {
  ...MDXComponents,
  ProgressToggle,
};
