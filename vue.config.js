const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/lorenzokimarthur.com/',
  outputDir: 'dist',
  assetsDir: 'assets',
  transpileDependencies: true
})