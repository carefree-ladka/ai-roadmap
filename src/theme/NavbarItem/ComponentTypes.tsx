import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import SocialLinks from '@site/src/components/SocialLinks';

// Lets docusaurus.config.ts declare {type: 'custom-socialLinks'} as a
// navbar item and have it render the React component below.
export default {
  ...ComponentTypes,
  'custom-socialLinks': SocialLinks,
};
