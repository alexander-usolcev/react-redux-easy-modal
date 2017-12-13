const path = require('path');
const webpack = require('webpack');

module.exports = {
    // context: path.join(__dirname + '/source'),

    entry: {
        'app': [
            'react-hot-loader/patch', // RHL patch
            path.join(__dirname + '/source/index.js')
        ],
        'test-browser': path.join(__dirname + '/test/test-browser.js')
    },

    output: {
        path: path.join(__dirname + '/build'),
        filename: '[name].js',
        publicPath: '/'
    },

    devtool: 'eval-source-map',

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

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.min.js',
            minChunks(module) {
                let context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
    ]
};
