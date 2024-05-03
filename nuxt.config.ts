// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  telemetry: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt-gtag',
    '@nuxt/fonts',
  ],
  fonts: {
    families: [
      { name: 'Montserrat', provider: 'none' },
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  runtimeConfig: {
    public: {
      gtagId: 'G-XXXXXXXXXX',
    },
  },
  image: {
    format: ['avif', 'webp', 'png', 'jpg'],
  },
  gtag: {
    id: 'G-CP62J5QD7L',
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
