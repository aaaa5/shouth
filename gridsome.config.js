// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require("@fullhuman/postcss-purgecss");
const tailwind = require("tailwindcss");

const postcssPlugins = [tailwind("./tailwind.js")];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Homepage design",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/*.md',
        typeName: 'BlogPost',
        route: 'blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/staticPage/*.md',
        typeName: 'StaticPage',
        route: '/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/servicePages/*.md',
        typeName: 'ServicePage',
        route: 'services/:slug'
      }
    }    
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};

module.exports = {
  chainWebpack (config, { isServer }) {
    if (isServer) {
      config.externals([/^(vue|vue-router|vue-meta)$/])
    }
  }
}