import Link from '@docusaurus/Link';
import { SOCIALS, type Social } from '@site/src/data/socials';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import {
  SiGithub,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiYoutube,
} from 'react-icons/si';
import styles from './styles.module.css';

const ICONS: Record<Social['id'], IconType> = {
  github: SiGithub,
  linkedin: SiLinkedin,
  youtube: SiYoutube,
  leetcode: SiLeetcode,
  instagram: SiInstagram,
};

interface SocialLinksProps {
  /**
   * Passed in by Docusaurus's NavbarItem renderer: true while the item is
   * being drawn inside the mobile sidebar.
   */
  mobile?: boolean;
  className?: string;
}

/**
 * Registered as the `custom-socialLinks` navbar item type in
 * src/theme/NavbarItem/ComponentTypes.tsx. Renders icon-only links on
 * desktop and labelled rows in the mobile sidebar, where a bare icon strip
 * would be hard to tap and unlabelled.
 */
export default function SocialLinks({
  mobile = false,
  className,
}: SocialLinksProps): ReactNode {
  if (mobile) {
    return (
      <ul className={clsx('menu__list', styles.menu, className)}>
        {SOCIALS.map(({ id, label, href }) => {
          const Icon = ICONS[id];
          return (
            <li className="menu__list-item" key={href}>
              <Link className={clsx('menu__link', styles.menuLink)} href={href}>
                <Icon size={18} aria-hidden="true" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={clsx(styles.row, className)}>
      {SOCIALS.map(({ id, href, ariaLabel }) => {
        const Icon = ICONS[id];
        return (
          <Link
            key={href}
            href={href}
            className={styles.link}
            aria-label={ariaLabel}>
            <Icon size={19} aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
