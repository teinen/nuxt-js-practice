module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: [
    'bulma/css/bulma.css',
    '~/css/main.css'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  router: {
    middleware: ['visits', 'user-agent']
  },
  build: {
    vendor: ['vue-notifications']
  },
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ],
  env: {
    users: [
      { id: 1, name: 'Kobe Bryant', number: 24 },
      { id: 2, name: 'Michael Jordan', number: 23 },
      { id: 3, name: 'Stephen Curry', number: 30 },
      { id: 4, name: 'Lebron James', number: 23 },
      { id: 5, name: 'Kevin Durant', number: 35 },
      { id: 6, name: 'Kyrie Irving', number: 2 }
    ]
  },
  generate: {
    routes: [
      '/1',
      '/2',
      '/3',
      '/4',
      '/5',
      '/6'
    ]
  },
  loading: false
  // loading: '~/components/loading.vue'
}