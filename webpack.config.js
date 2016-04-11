module.exports = {
    entry: {
        tvdux: "./src/index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name]-app.js"
    },
    module: {
        loaders: [
            { 
                test: /\.less$/,
                loader: "style!css!less" 
            },
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8010
    },
    resolve: {
        extensions: ['', '.js', '.jsx'] 
    }
};