// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@vueuse/nuxt", "nuxt-gtag"],
  css: ["~/assets/css/style.css", "~/assets/css/reset.css"],
  gtag: {
    id: "G-59DKYJ5ZGS",
  },
  app: {
    head: {
      title: "Index, the modern investing stack.",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Real-time signals, AI analysis, community intelligence, and institutional-grade research tools, all at your fingertips.",
        },

        // Open Graph Image
        { property: "og:image", content: "/og.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Index Logo" },
        { property: "og:title", content: "Index, the modern investing stack." },
        {
          property: "og:description",
          content:
            "Real-time signals, AI analysis, community intelligence, and institutional-grade research tools, all at your fingertips.",
        },

        // Twitter Card
        { name: "twitter:image", content: "/og.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "https://index.sc" },
        {
          name: "twitter:title",
          content: "Index, the modern investing stack.",
        },
        {
          name: "twitter:description",
          content:
            "Real-time signals, AI analysis, community intelligence, and institutional-grade research tools, all at your fingertips.",
        },
      ],
      link: [{ rel: "icon", type: "favicon", href: "/favicon.png" }],
    },
  },
});
