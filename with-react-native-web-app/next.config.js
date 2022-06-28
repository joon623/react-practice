const {withExpo} = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
    "react-native-web",
    "react-native-svg",
    "native-base",
    "react-native-svg",
]);

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            'react-native$': 'react-native-web',
        }
        config.resolve.extensions = [
            '.web.js',
            '.web.jsx',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
        ]
        return config
    },
};

module.exports = withPlugins(
    [
        withTM,
        [withFonts, {projectRoot: __dirname}],
        [withExpo, {projectRoot: __dirname}],
        // your plugins go here.
    ],
    nextConfig
);


