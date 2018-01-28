const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
    target: 'web',
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    },
    watch: true,
};

const serverConfig = {
    target: 'node',
    node: {
        __dirname: false,
      },    
    entry: './src/server/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    // devtool: 'source-map',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    },    
    externals: [nodeExternals()],
    watch: true,
};



module.exports = [clientConfig, serverConfig];