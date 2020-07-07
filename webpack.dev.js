const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./",
        watchContentBase: true,
        // open: "Google Chrome"
        
    }
    // ,
    // plugins: [
    //     new LiveReloadPlugin({ reloadMissingCSS: false})
    // ]
});
