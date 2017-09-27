const path = require('path');
const webpack = require('webpack');

const reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
};

const reduxExternal = {
    root: 'Redux',
    commonjs2: 'redux',
    commonjs: 'redux',
    amd: 'redux'
};

const reactReduxExternal = {
    root: 'ReactRedux',
    commonjs2: 'react-redux',
    commonjs: 'react-redux',
    amd: 'react-redux'
};

module.exports = {
    context: path.join(__dirname + '/source'),

    entry: {
        'index': './index.js'
    },

    output: {
        path: path.join(__dirname + '/build'),
        filename: '[name].js',
        // libraryTarget: 'commonjs2',
        publicPath: '/',

        library: 'react-redux-easy-modal',
        libraryTarget: 'commonjs2'
    },

    resolve: {
        extensions: ['.js'],
        unsafeCache: true
    },

    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?cacheDirectory=true'
            }
        ]
    },

    externals: {
        react: reactExternal,
        redux: reduxExternal,
        'react-redux': reactReduxExternal
    },
};
