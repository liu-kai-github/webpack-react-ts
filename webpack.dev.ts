import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import commonConfig from './webpack.common';

const devConfig: webpack.Configuration = merge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    cache: true,
    // devtool: 'inline-source-map',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        host: '0.0.0.0',
        useLocalIp: true,
        hot: true,
        // noInfo: true,
        open: true,
        port: 8080,
    },
    plugins: [
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new ExtractTextPlugin({
            // filename:  (getPath) => {
            //     return getPath('css/[name].css').replace('css/js', 'css');
            // },
            filename: 'style.[contenthash].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            title: 'Development',
            favicon: path.resolve(__dirname, './src/favicon.png'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'main',
            minChunks: Infinity,
        }),
    ],
});

export default devConfig;
