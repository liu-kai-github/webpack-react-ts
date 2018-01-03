import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import commonConfig from "./webpack.common";

const devConfig: webpack.Configuration = merge(commonConfig, {
    cache: true,
    devServer: {
        host: "0.0.0.0",
        hot: true,
        open: true,
        port: 8080,
        useLocalIp: true,
        // noInfo: true,
    },
    // devtool: "inline-source-map",
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         "style-loader",
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 sourceMap: true,
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.less/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, "./src/favicon.png"),
            template: path.resolve(__dirname, "./src/index.html"),
            title: "Development",
        }),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: Infinity,
            name: "main",
        }),
    ],
});

export default devConfig;
