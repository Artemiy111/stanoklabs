// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt-gtag',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  // runtimeConfig: {
  //   public: {
  //     gtagId: 'G-XXXXXXXXXX',
  //   },
  // },
  image: {
    format: ['avif', 'webp', 'png', 'jpg'],
  },
  gtag: {
    id: 'CP62J5QD7L',
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  imports: {
    dirs: [],
  },

  components: {
    dirs: [],
  },
})
