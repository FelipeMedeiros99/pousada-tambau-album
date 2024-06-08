import { override, addWebpackModuleRule } from 'customize-cra'

module.exports = override(
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: '@svgr/webpack',
        options: {
          throwIfNamespace: false, // ignorar o erro de tags de namespace
          icon: true,
        },
      },
    ],
  })
);
