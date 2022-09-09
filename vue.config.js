module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lorenzokimarthur.com/'
    : '/'
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
