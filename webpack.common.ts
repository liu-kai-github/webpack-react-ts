import * as path from "path";
import * as webpack from "webpack";

const commonConfig: webpack.Configuration = {
    entry: {
        main: path.resolve(__dirname, "./src/main.tsx"),
    },
    module: {
        rules: [
            {
                loaders: ["babel-loader", "ts-loader"],
                test: /\.ts|tsx$/,
            },
        ],
    },
    plugins: [],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
};

export default commonConfig;
