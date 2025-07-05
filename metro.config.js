// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

// allow .cjs files (Firebase ships some modules as CJS)
config.resolver.sourceExts.push('cjs');

// disable the new package.json:exports resolver
config.resolver.unstable_enablePackageExports = false;

// (optional but recommended) avoid symlink resolution quirks
config.resolver.unstable_enableSymlinks = false;

// Exclude test files and __mocks__ directory
config.resolver.blockList = [/\/__mocks__\//, /\.test\.tsx$/];

// Ensure console and util are resolved correctly
config.resolver.extraNodeModules = {
  console: require.resolve('console-browserify'),
  util: require.resolve('util/'),
};

module.exports = config;
