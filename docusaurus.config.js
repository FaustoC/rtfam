// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Read the Fabulous Asoiaf Manual',
  tagline: 'Unofficial community answers to common rules questions',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rtfamanual.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'faustoc', // Usually your GitHub org/user name.
  projectName: 'rtfam', // Usually your repo name.
  deploymentBranch: 'master',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/rtfam-social-card.png',
      navbar: {
        title: 'rtfAm',
        logo: {
          alt: 'Read The Fabulous Asoiaf Manual',
          src: 'img/logo.png',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },*/
	  {
		type: 'docSidebar',
		position: 'left',
		sidebarId: 'rtfamSidebar',
     		label: 'Manual',
	  },
          /*{to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },*/
	{
          type: 'search',
          position: 'left',
	  className: 'algoliaSearchBarCustom',
	},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/
          {
            
            items: [
              {
		      label: 'Requests and Suggestions',
                href: 'https://github.com/FaustoC/rtfam/issues',
              },
            ],
          },
        ],
        copyright: `Built by Fenice with Docusaurus.`,
      },
      colorMode: {
	defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
algolia: {
      // The application ID provided by Algolia
      appId: 'AY0QIUMP0L',

      // Public API key: it is safe to commit it
      apiKey: 'fd10c2b1b572c3341aeac20a4d77d76e',

      indexName: 'rtfamanual',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    }),
};

export default config;
