const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/app.tsx",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "Public"),
    },
    optimization: {
        runtimeChunk: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    devServer: {
        contentBase: "Public",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                loader: "ts-loader",
            },
            {
              test: /\.css$/,
              include: /src/,
              exclude: /node_modules/,
              loader: ExtractTextPlugin.extract('typings-for-css-modules-loader?modules&namedExport&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
            },
            {
              test: /\.css$/,
              include: /node_modules/,
              loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
            },
        ],
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      new HtmlWebpackPlugin({
        filename: 'app.html',
        template: './assets/app.html'
      }),
    ],
}