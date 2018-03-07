module.exports = function (bundler) {
  bundler.addAssetType('vue', require.resolve('./src/EslintAsset.js'));
  bundler.addAssetType('js', require.resolve('./src/EslintAsset.js'));
};