module.exports = {
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
        config.plugin('fork-ts-checker')
    },
    // 打包时不生成.map文件
    productionSourceMap: false,
}