'use strict';

var hamljs = require('hamljs');
var extend = require('extend');
var Promise = require('promise');

exports.name = 'hamljs';
exports.inputFormats = ['haml', 'hamljs'];
exports.outputFormat = 'html';

exports.compile = hamljs.compile;

exports.renderFileAsync = function (file, options, locals) {
  return new Promise(function (fulfill, reject) {
    options.locals = extend({}, options.locals, locals);
    hamljs.renderFile(file, 'utf-8', options, function (err, result) {
      if (err) {
        return reject(err);
      }
      return fulfill(result);
    });
  });
};
