import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as UglifyJSPlugin from "uglifyjs-webpack-plugin";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import commonConfig from "./webpack.common";

const prodConfig: webpack.Configuration = merge(commonConfig, {
    devtool: "source-map",
    entry: {
        vendor: [
            "react",
            "react-dom",
            // "react-scripts",
        ],
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                // root: ".",
                                // import: false,
                                // modules: true,
                                // localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                minimize: true,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "less-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                    // publicPath: "http://localhost:8088",
                }),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            outputPath: "/static/media/",
                            // publicPath: "http://localhost:8088",
                        },
                    },
                ],
            },
        ],
    },
    output: {
        chunkFilename: "static/js/[name].[chunkhash].js",
        filename: "static/js/[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: "http://localhost:8088",
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
        new webpack.HashedModuleIdsPlugin(),
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "runtime",
        }),
        new ExtractTextPlugin({
            allChunks: true,
            // filename:  (getPath) => {
            //     return getPath("css/[name].css").replace("css/js", "css");
            // },
            filename: "static/css/style.[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            favicon: "./src/favicon.png",
            minify: {
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                // ignoreCustomComments: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                // keepClosingSlash: true,
                useShortDoctype: true,
            },
            template: "./src/index.html",
            title: "Production",
        }),
    ],
});

export default prodConfig;
