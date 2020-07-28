const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig();
    // console.log("svg resolver called");
    return {
        transformer: {
            babelTransformerPath: require.resolve(
                "react-native-svg-transformer"
            ),
        },
        resolver: {
            assetExts: assetExts.filter((ext) => ext !== "svg"),
            sourceExts: [...sourceExts, "svg"],
        },
    };
})();
