const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {},
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, 
            },
            {
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'public'), 
        compress: true,
        port: 8080, 
        open: true,
    },
};


