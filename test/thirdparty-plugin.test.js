/**
 * This file is part of pigalle.plugins.thirdparty
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {ThirdPartyPlugin} = require('../lib/thirdparty-plugin')

describe('Class {ThirdPartyPlugin}', () => {
  it('should be a function', () => {
    (ThirdPartyPlugin).should.be.a.Function()
  })
})

describe('Create a instance of {ThirdPartyPlugin} using <factory> method', () => {
  it('should be an object', () => {
    (ThirdPartyPlugin.factory()).should.be.an.Object()
  })

  it('should be an instance of {ThirdPartyPlugin}', () => {
    (ThirdPartyPlugin.factory()).should.be.an.instanceOf(ThirdPartyPlugin)
  })

  it('should have an internal property named <type> equal to "plugins.thirdparty"', () => {
    (ThirdPartyPlugin.factory().type()).should.be.equal('plugins.thirdparty')
  })
})
