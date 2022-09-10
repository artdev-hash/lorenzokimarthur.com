module.exports = {
  publicPath: process.env.NODE_ENV === 'development'
    ? '/lorenzokimarthur.com/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  transpileDependencies: true
}
