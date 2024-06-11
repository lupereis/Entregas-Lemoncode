import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js",".ts", ".tsx"],
    },
    entry: {
        app: './index.tsx',
    },
    output: {
        filename: '[name].[chunkhash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {
                    modules: {
                      exportLocalsConvention: "camelCase",
                      localIdentName: "[path][name]__[local]--[hash:base64:5]",
                    },
                  },
                },
                "sass-loader",
              ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
              test: /\.(png|jpg)$/,
              type: 'asset/resource',
            },
            {
              test: /\.html$/,
              loader: 'html-loader',
            },
        ],
    },
    devtool: 'eval-source-map',
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        static: {
          directory: path.join(__dirname, "src"),
        },
        devMiddleware: {
            stats: "errors-only",
        },
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "index.html", 
            scriptLoading:'blocking',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
};