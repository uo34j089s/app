// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@vueuse/nuxt"],
  css: ["~/assets/css/style.css", "~/assets/css/reset.css"],
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
        {
          property: "og:image",
          content: "/og.png",
        },
        // Optional: Specify OG image dimensions for better social media display
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "Index Logo",
        },
      ],
      link: [{ rel: "icon", type: "favicon", href: "/favicon.png" }],
    },
  },
});
