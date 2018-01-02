import * as path from 'path';
import * as webpack from 'webpack';

const commonConfig: webpack.Configuration = {
    entry: {
        main: path.resolve(__dirname, './src/main.tsx'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx$/,
                loaders: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    plugins: [],
};

export default commonConfig;
