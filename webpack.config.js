const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const doNothing = {
	apply: function () {},
};

module.exports = (env) => {
	process.env.NODE_ENV = env.NODE_ENV;
	const isProd = env.NODE_ENV == "production";
	const isDev = env.NODE_ENV == "development";
	const config = {
		mode: process.env.NODE_ENV,
		context: __dirname,
		entry: "./index",
		devServer: {
			contentBase: path.resolve(__dirname, "dist"),
			// compress: true,
			historyApiFallback: true,
			hot: true,
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: "ts-loader",
					exclude: /node_modules/,
					options: {
						transpileOnly: true,
					},
				},
				{
					test: /\.css$/i,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
							},
						},
						"postcss-loader",
					],
					exclude: [/node_modules/, /\.module\.css$/],
				},
				{
					test: /\.css$/i,
					use: [
						{ loader: "style-loader" },
						{
							loader: "css-loader",
							options: {
								modules: true,
								importLoaders: 1,
							},
						},
						{ loader: "postcss-loader" },
					],
					exclude: [/node_modules/],
					include: [/\.module\.css$/],
				},
			],
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
			new ForkTsCheckerWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: `TITLE ${isDev ? "development" : ""}`,
				template: path.resolve(__dirname, "./index.html"),
				alwaysWriteToDisk: true,
			}),
			isProd ? new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.(js|css)$/]) : doNothing,
			isProd ? new HtmlWebpackHarddiskPlugin() : doNothing,
			isProd
				? new BrotliPlugin({
						asset: "[path].br[query]",
						test: /\.(html)$/,
						minRatio: 1,
				  })
				: doNothing,
		],
		resolve: {
			extensions: [".tsx", ".ts", ".js"],
			alias: {
				react: "preact/compat",
				// Remove if not needed to reduce bundle size
				// "react-dom/test-utils": "preact/test-utils",
				// Must be below test-utils
				"react-dom": "preact/compat",
				components: path.resolve(__dirname, "components"),
				pages: path.resolve(__dirname, "pages"),
				styles: path.resolve(__dirname, "styles"),
			},
		},
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, "dist"),
			publicPath: "/",
		},
	};

	// return smp.wrap(config);
	return config;
};
