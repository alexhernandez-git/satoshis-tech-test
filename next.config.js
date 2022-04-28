module.exports = {
  future: {
    webpack5: true,
  },
  env: {},
  webpack: (webpackConfig, { isServer }) => {
    const { module } = webpackConfig;
    return {
      ...webpackConfig,
      module: {
        ...module,
        rules: [
          ...module.rules,
          {
            test: /\.(png|gif|jpg|jpeg)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  emitFile: isServer,
                  publicPath: `/_next/static/`,
                  outputPath: `${isServer ? "../" : ""}static/`,
                  name: "[path][name].[ext]",
                },
              },
            ],
          },
        ],
      },
    };
  },
};
