// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            // AJUSTE ESTA LINHA:
            "@/components": "./components", // Aponta para a pasta components na raiz do projeto
            // AJUSTE ESTA LINHA:
            "@/src": "./src", // Aponta para a pasta src na raiz do projeto
          },
        },
      ],
      'expo-router/babel',
    ],
  };
};