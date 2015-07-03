'use strict';

var webpack = require('webpack');

var isProductionBuild = process.env.NODE_ENV && process.env.NODE_ENV === 'production';

var config = {
    entry: __dirname + '/src/app.js',

    output: {
        path: __dirname + '/lib/',
        publicPath: 'lib/',
        filename: 'app.js',
        pathinfo: !isProductionBuild
    },

    debug: !isProductionBuild,

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },

    plugins: []
};

if (isProductionBuild) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        sourceMap: false
    }));
} else {
    config.devtool = 'eval';
    config.plugins.push(new webpack.NoErrorsPlugin());
}

module.exports = config;
