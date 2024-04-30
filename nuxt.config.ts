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
  runtimeConfig: {
    public: {
      gtagId: 'G-XXXXXXXXXX',
    },
  },
  gtag: {
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
