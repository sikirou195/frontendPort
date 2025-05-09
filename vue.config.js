// vue.config.js
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // active l’API Options de Vue 3 si tu t’en sers
        __VUE_OPTIONS_API__: JSON.stringify(true),
        // désactive les devtools en prod
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        // désactive le warning hydration mismatch
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
};
