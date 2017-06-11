'use strict'

const hamljs = require('hamljs')
const extend = require('extend')

exports.name = 'hamljs'
exports.inputFormats = ['haml', 'hamljs']
exports.outputFormat = 'html'

exports.compile = hamljs.compile

exports.renderFileAsync = function (file, options, locals) {
  return new Promise((resolve, reject) => {
    options.locals = extend({}, options.locals, locals)
    hamljs.renderFile(file, 'utf-8', options, (err, result) => {
      if (err) {
        return reject(err)
      }
      return resolve(result)
    })
  })
}
