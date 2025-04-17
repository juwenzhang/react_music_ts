// @ts-ignore
const path = require('path');
const CracoLessPlugin = require("craco-less")
// const CracoLessPlugin = require('craco-less');

module.exports = {
    // webpack config
    webpack: {
        mode: 'development',
        devtool: 'source-map',
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
        watchOptions: {
            ignored: [
                /node_modules/
            ]
        },
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    // webpack loader 的解析顺序是从下往上的呐
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader',
                        'postcss-loader'
                    ]
                },
              {
                  test: /\.css$/,
                  use: [
                      'style-loader',
                      'css-loader',
                      'postcss-loader'
                  ]
              }
            ]
        },
    },
    // get the less config
    // depend on craco-less
    // config style with webpack config
    // you can learn this config from ant-design-components
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#262828'
                        },
                        // 集成 ant-designed 的时候需要进行配置的呐
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
