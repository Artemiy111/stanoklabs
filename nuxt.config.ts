// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  telemetry: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt-gtag',
    '@nuxt/fonts',
  ],

  // style
  fonts: {
    families: [
      { name: 'Montserrat', provider: 'none' },
    ],
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  image: {
    format: ['avif', 'webp', 'png', 'jpg'],
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  //
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

  gtag: {
    id: 'G-CP62J5QD7L',
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
