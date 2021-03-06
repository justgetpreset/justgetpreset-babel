/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

function createConfig() {
  return {
    plugins: [
      require.resolve('babel-plugin-transform-decorators-legacy'),
      require.resolve('babel-plugin-add-module-exports'),
    ],
    presets: [
      require.resolve('babel-preset-react'),
      require.resolve('babel-preset-es2015'),
      require.resolve('babel-preset-stage-0'),
    ],
  };
}

module.exports = createConfig;
