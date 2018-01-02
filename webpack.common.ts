import * as path from 'path';
import * as webpack from 'webpack';

const commonConfig: webpack.Configuration = {
    entry: {
        main: path.resolve(__dirname, './src/main.jsx'),
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader'],
            },
        ],
    },
    plugins: [],
};

export default commonConfig;
