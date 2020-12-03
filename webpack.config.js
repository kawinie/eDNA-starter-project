const path = require("path");
const webpack = require("webpack"); //to access built-in plugins

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const PACKAGE = require(path.resolve(__dirname, "package.json"));

const doNothing = {
	apply: function () {},
};

module.exports = (env, argv) => {
	process.env.NODE_ENV = argv.mode;
	const isProduction = process.env.NODE_ENV == "production";
	const config = {
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
			new webpack.DefinePlugin({
				__APPVERSION__: JSON.stringify(PACKAGE.version),
			}),
			new webpack.ProgressPlugin(),
			new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
			new ForkTsCheckerWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: `TITLE ${isDev ? "development" : ""}`,
				template: path.resolve(__dirname, "./index.html"),
				alwaysWriteToDisk: true,
			}),
			isProduction
				? new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.(js|css)$/])
				: doNothing,
			isProduction ? new HtmlWebpackHarddiskPlugin() : doNothing,
			isProduction
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
