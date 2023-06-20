module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@icons": "./src/assets/icons",
            "@global": "./src/global",
            "@hooks": "./src/hooks",
            "@pages": "./src/pages",
            "@services": "./src/services",
          },
        },
      ],
    ],
  };
};
