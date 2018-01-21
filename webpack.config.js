const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.tsx',
    entry: {
        client: './src/client/app.tsx',
        server: './src/server/app.tsx',
    },
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
    }, 
    devtool: 'source-map',       
	module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    },
    target: 'node',
    externals: [nodeExternals()]
};