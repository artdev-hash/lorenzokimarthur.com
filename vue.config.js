module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lorenzokimarthur.com/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  componentsDir: 'components',
  transpileDependencies: true
}