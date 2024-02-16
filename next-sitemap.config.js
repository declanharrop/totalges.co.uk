module.exports = {
  siteUrl: process.env.SITE_URL || 'https://totalhomeimprovements.uk',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  // ...other options
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://totalhomeimprovements.uk/server-sitemap.xml', // <==== Add here
    ],
  },
};
