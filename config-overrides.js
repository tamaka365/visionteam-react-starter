const TerserPlugin = require("terser-webpack-plugin");

const platform = process.env.npm_lifecycle_script.split("--env=")[1];
process.env.REACT_APP_MODE = platform;

if (platform !== "prod") {
  process.env.GENERATE_SOURCEMAP = true;
}

const {
  useBabelRc: babelRc,
  override,
  addWebpackModuleRule,
  setWebpackStats,
} = require("customize-cra");

module.exports = (config, env) => {
  const overrider = override(
    babelRc(),
    setWebpackStats("none"),
    addWebpackModuleRule({
      test: /\.(ts|tsx|jsx|js)$/,
      use: [
        { loader: "babel-loader" },
        {
          loader: "@linaria/webpack-loader",
          options: {
            cacheDirectory: "src/.linaria_cache",
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    })
  );

  if (env === "production") {
    const minimizer = config.optimization.minimizer;
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
          },
        },
      }),
      ...minimizer,
    ];
  }

  return overrider(config, env);
};
