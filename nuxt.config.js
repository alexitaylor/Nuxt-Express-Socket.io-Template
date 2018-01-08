module.exports = {
  head: {
     meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      ],
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
  },
    /*
    ** Global CSS
    */
    css: ['~/assets/css/main.css'],
    modules: ['~/io'],
        env: {
          WS_URL: process.env.WS_URL || 'http://localhost:3000'
        }
}
