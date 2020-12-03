const path = require("path");
const webpack = require("webpack"); //to access built-in plugins

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

const PACKAGE = require(path.resolve(__dirname, "package.json"));

const doNothing = {
	apply: function () {},
};

module.exports = (env, argv) => {
	process.env.NODE_ENV = argv.mode;
	const isProduction = process.env.NODE_ENV == "production";
	console.log("Production?", isProduction);

	return {
		context: __dirname,
		entry: "./app/index",
		devServer: {
			contentBase: path.resolve(__dirname, "_dist"),
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
					// Normal CSS Files
					test: /\.css$/i,
					use: [
						{ loader: isProduction ? MiniCssExtractPlugin.loader : "style-loader" },
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
							},
						},
						{ loader: "postcss-loader" },
					],
					exclude: [/node_modules/, /\.module\.css$/],
				},
				{
					// CSS Module Files
					test: /\.css$/i,
					use: [
						{ loader: isProduction ? MiniCssExtractPlugin.loader : "style-loader" },
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
		optimization: {
			minimizer: [
				// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
				`...`,
				new CssMinimizerPlugin(),
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				__APPVERSION__: JSON.stringify(PACKAGE.version),
			}),
			new webpack.ProgressPlugin(),
			new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
			new ForkTsCheckerWebpackPlugin(),

			new MiniCssExtractPlugin(),
			new HtmlWebpackPlugin({
				title: `EDNA Dashboard ${isProduction ? "" : "(dev)"}`,
				template: path.resolve(__dirname, "./app/index.ejs"),
				alwaysWriteToDisk: true,
			}),
			isProduction ? new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.js$/]) : doNothing,
			isProduction ? new HtmlWebpackHarddiskPlugin() : doNothing,
			isProduction
				? new BrotliPlugin({
						asset: "[path].br[query]",
						test: /\.(html)$/,
						minRatio: 1, // always compress
				  })
				: doNothing,
			isProduction ? new HTMLInlineCSSWebpackPlugin() : doNothing,
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
			path: path.resolve(__dirname, "_dist"),
			publicPath: "/",
		},
	};
};
