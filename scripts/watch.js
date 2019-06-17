
const ___environment = 'development';

process.env.NODE_ENV = ___environment;

const fs = require('fs-extra');
const paths = require('react-scripts/config/paths');
const webpack = require('webpack');
const webpackconfig = require('react-scripts/config/webpack.config.js');
const config = webpackconfig(___environment);

// config.output.publicPath = '/ClientApp';

config.output.publicPath = 'build/';
config.output.path = paths.appBuild;
config.output.hotUpdateChunkFilename = 'hot/hot-update.js';
config.output.hotUpdateMainFilename = 'hot/hot-update.json';

config.entry = config.entry.filter(
  entry => !entry.includes('webpackHotDevClient')
);

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.error(stats.toString({
      assets: false,
      children: false,
      chunks: false,
      colors: true,
      errors: true,
      errorDetails: true,
      hash: false,
      modules: false,
      publicPath: true,
      reasons: false,
      source: false,
      timings: true,
      version: false,
      warnings: true,
    }));
  
  }
});