require("dotenv").config();

const product = {
  name: "Parqet - Portfolio Dashboard",
  short_name: "Parqet",
  short_description:
    "Visualisiere deinen Weg Vermögen aufzubauen — jederzeit und überall. Das Portfolio Performance Tracking von Parqet für Aktien und ETF Anleger",
  url: `https://app.parqet.com`,
};

module.exports = {
  /*
   ** Headers of the page
   */
  ssr: true,
  modern: process.env.NODE_ENV === "production" ? "client" : false,
  telemetry: false,
  components: [
    {
      path: "~/components",
      pathPrefix: false, // do not use folder path as prefix
    },
  ],
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: product.name },
    ],
    link: [
      { rel: "preconnect", href: "https://logo.clearbit.com" },
      { rel: "preconnect", href: "https://financialmodelingprep.com" },
      { rel: "preconnect", href: "https://img.parqet.com" },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/icon.svg",
      },
      {
        rel: "icon",
        sizes: "any",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/img/logos/parqet_icon_pos_256x256.png",
      },
    ],
    script: [
      {
        src: "https://hulk.parqet.com/js/script.exclusions.outbound-links.js",
        "data-exclude": "/auth/login, /logout, /logging-in/, /signin",
        async: true,
        defer: true,
        "data-domain": "parqet.com",
      },
      {
        async: true,
        defer: true,
        src: "https://r.wdfl.co/rw.js",
        "data-rewardful": "96dc03",
      },
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
