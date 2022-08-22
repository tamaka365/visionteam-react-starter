const TerserPlugin = require("terser-webpack-plugin");

const platform = process.env.npm_lifecycle_script.split("--env=")[1];
process.env.REACT_APP_MODE = platform;

if (platform !== "prod") {
  process.env.GENERATE_SOURCEMAP = true;
}

const { useBabelRc: babelRc, override } = require("customize-cra");

module.exports = (config, env) => {
  // const overrider = override(babelRc());

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

  return config;

  // return overrider(config, env);
};
