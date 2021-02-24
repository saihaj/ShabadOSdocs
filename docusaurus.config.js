/* eslint-disable global-require */

const pages = require( './src/pages.config' )

module.exports = {
  title: 'Shabad OS Docs',
  tagline: 'Browse the latest docs, including tutorial guides, sample code, product articles, and API references.',
  url: 'https://docs.shabados.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'shabados',
  projectName: 'docs',
  themeConfig: {
    hideableSidebar: false,
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '1px',
          paddingBottom: '2px',
        },
        lightIcon: '😎',
        lightIconStyle: {
          marginLeft: '1px',
          paddingBottom: '2px',
        },
      },
    },
    navbar: {
      hideOnScroll: true,
      title: 'Docs',
      logo: {
        alt: 'ShabadOS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Products',
          position: 'left',
          items: [
            { to: 'database/', label: 'Database' },
            { to: 'viewer/', label: 'Viewer' },
            { to: 'presenter/', label: 'Presenter' },
            { to: 'mobile/', label: 'Mobile' },
            { to: 'gurmukhi-utils/', label: 'Gurmukhi Utils' },
            { to: 'theme-tool/', label: 'Theme Tool' },
          ],
        },
        { to: 'tutorials/', label: 'Tutorials', position: 'left' },
        { to: 'community/', label: 'Community', position: 'left' },
        {
          href: 'https://github.com/shabados/docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      // https://v2.docusaurus.io/docs/search/
      apiKey: '008a4ddf459e4f41ceddc60d6baebc6f',
      indexName: 'shabados',
    },
    prism: {
      theme: require( 'prism-react-renderer/themes/github' ),
      darkTheme: require( 'prism-react-renderer/themes/vsDark' ),
      defaultLanguage: 'javascript',
    },
    footer: {
    },
  },
  plugins: [ ...pages ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve( './src/css/custom.css' ),
        },
      },
    ],
  ],
}
