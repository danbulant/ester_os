module.exports = {
    context: __dirname + "/src",
    entry: {
        javascript: "./app.js",
        html: "./index.html",
    },

    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    loaders: [
        {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["react-hot", "babel-loader"],
        }
    ],
}