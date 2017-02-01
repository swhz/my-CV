var webpack = require('webpack'),
    path = require("path"),
    OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, "src"),
    entry: {
        js: "./main.js",
        html: "./index.html"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=819200"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?sourceMap"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass?sourceMap"
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=50000&name=[path][name].[ext]"
            }
        ]
    },
    babel: {
        presets: ["es2015", "stage-0", "react"],
        plugins: ["transform-runtime", ["antd", { "style": "css" }]]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.DefinePlugin({
            "process.env": { NODE_ENV: process.env.NODE_ENV ? JSON.stringify("production") : JSON.stringify("development") }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,
        inline: true,//实时刷新
        hot: true
    }
}
