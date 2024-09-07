module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@utils': './src/utils',
            '@reduxs': './src/reduxs',
            '@themes': './src/themes',
            '@config': './src/config',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  };
};
