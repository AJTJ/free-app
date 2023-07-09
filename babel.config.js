module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      // this might have to be last
      "react-native-reanimated/plugin",
    ],
  };
};
