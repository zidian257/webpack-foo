module.exports = {
  // see https://webpack.docschina.org/configuration/stats
  stats: {
    all: false,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    // our additional options
    // moduleTrace: true,
    timings: true,
    version: true,
    performance: true
    // errorDetails: true
  }
};
