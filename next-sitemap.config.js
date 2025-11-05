/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://iinia.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  alternateRefs: [
    {
      href: 'https://iinia.com/es',
      hreflang: 'es',
    },
    {
      href: 'https://iinia.com/en',
      hreflang: 'en',
    },
  ],
};
