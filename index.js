'use strict';

module.exports = {
  presets: [
    [
      require.resolve('babel-preset-env'),
      {
        targets: {
          ie: 9,
        },
        useBuiltIns: false,
        modules: false,
      },
    ],
    require.resolve('babel-preset-react'),
  ],
  plugins: [
    require.resolve('babel-plugin-transform-class-properties'),
    [
      require.resolve('babel-plugin-transform-object-rest-spread'),
      {
        useBuiltIns: true,
      },
    ],
    [
      require.resolve('babel-plugin-transform-react-jsx'),
      {
        useBuiltIns: true,
      },
    ],
    [
      require.resolve('babel-plugin-transform-regenerator'),
      {
        async: false,
      },
    ],
    [
      require.resolve('babel-plugin-transform-runtime'),
      {
        helpers: true,
        polyfill: false,
        regenerator: true,
      },
    ],
  ],
};
