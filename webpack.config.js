const path = require('path');
const nodeExternals = require('webpack-node-externals');


const serverConfig = {
    target: 'node',
    entry: './src/server/app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
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
    externals: [nodeExternals()],
    watch: true,
    stats: 'errors-only',    
};

const clientConfig = {
    target: 'web',
    entry: './src/client/app.tsx',
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
    stats: 'errors-only',        
};

module.exports = [serverConfig, clientConfig];