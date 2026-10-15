/**
 * Single source of truth for the author's profiles.
 *
 * Consumed by the navbar (icon-only, src/components/SocialLinks) and by the
 * footer "Elsewhere" column in docusaurus.config.ts. Deliberately free of
 * React/react-icons imports so docusaurus.config.ts — which runs in plain
 * Node — can import it; the icon component for each `id` is resolved in
 * src/components/SocialLinks.
 */
export interface Social {
  /** Matches a key in the ICONS map in src/components/SocialLinks. */
  id: 'github' | 'linkedin' | 'youtube' | 'leetcode' | 'instagram';
  /** Visible label in the footer and the mobile menu. */
  label: string;
  href: string;
  /** Spoken by screen readers on the icon-only navbar links. */
  ariaLabel: string;
}

export const SOCIALS: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/carefree-ladka',
    ariaLabel: 'GitHub profile',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kumpawan/',
    ariaLabel: 'LinkedIn profile',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@Code2Offer',
    ariaLabel: 'YouTube channel',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Asyncy99/',
    ariaLabel: 'LeetCode profile',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/carefree_ladka',
    ariaLabel: 'Instagram profile',
  },
];
