module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              // @内部已经配置为src
              'assets': '@/assets',
              'components': '@/components',
              'common': '@/common'
          }
      }
  },
  publicPath: './'
}