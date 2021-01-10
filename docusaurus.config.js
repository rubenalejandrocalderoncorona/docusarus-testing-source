module.exports = {
  title: 'Zype Docs',
  tagline: 'The Support Docs',
  url: 'https://zype.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'zype', // Usually your GitHub org/user name.
  projectName: 'zype', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {href: 'https://www.zype.com/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'How To Upload To Zype From Local Storage',
              to: 'docs',
            },
            {
              label: 'How to Import to Zype From a Third Party Source',
              to: 'docs/import_and_upload/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/zype',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/zype',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://www.zype.com/blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zype, Inc. Built with Docusaurus.`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
