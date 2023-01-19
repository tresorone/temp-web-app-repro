module.exports = {
  /*
   ** Headers of the page
   */
  ssr: true,
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  htmlAttrs: {
    lang: "de",
  },
  bodyAttrs: {
    tabindex: 1,
  },
  loading: false,
  watchers: {
    chokidar: {
      ignored: [/.git/, /node_modules/],
    },
    webpack: {
      ignored: [/.git/, /node_modules/],
    },
  },
};
