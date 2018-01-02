const path = require('path');

module.exports = {
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
