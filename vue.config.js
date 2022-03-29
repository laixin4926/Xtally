const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  lintOnSave: false,
  chainWebpack:config=>{
    config
    .plugin('html')
    .tap(args => {
      args[0].title= '小新记账'
      return args
    })
    const dir =path.resolve(__dirname,'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir)
   


  }
}
