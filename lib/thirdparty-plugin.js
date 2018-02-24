/**
 * This file is part of pigalle.plugins.thirdparty
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module thirdparty-plugin
 * @description An plugin to include third party library into the Pigalle framework.
 * @example
 *
 * const {ThirdPartyPlugin} = require('@pigalle/entities.thirdparty')
 *
 * // Prepare the usage of [express](https://expressjs.com/) into a Pigalle application.
 * const expressEntity = ThirdPartyPlugin.factory('express')
 *
 * // ... or you can use another name for pluginœ
 * const expressEntity = ThirdPartyPlugin.factory('http', require('express'))
 */

const {PluginEntity} = require('@pigalle/entities.plugin')

/**
 * The Pigalle type.
 *
 * @type {string}
 */
const PIGALLE_TYPE = 'plugins.thirdparty'

/**
 * A class to use external or third-party library in a Pigalle application.
 *
 * @class
 * @public
 */
class ThirdPartyPlugin extends PluginEntity {
  /**
   *
   * @param name {string} - The name of third-party library.
   * @param [nodeModule] {object} - The optional module related to the provided name.
   * @throws {UndefinedError}
   * @constructor
   * @public
   */
  constructor (name, nodeModule) {
    super()
    this.setType(PIGALLE_TYPE)
  }
}

module.exports = {}
module.exports.ThirdPartyPlugin = ThirdPartyPlugin
