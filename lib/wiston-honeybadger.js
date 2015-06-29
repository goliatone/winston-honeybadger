/*
 * wiston-honeybadger
 * https://github.com/goliatone/wiston-honeybadger
 *
 * Copyright (c) 2015 goliatone
 * Licensed under the MIT license.
 */
'use strict';

var util = require('util');
var winston = require('winston');
var Badger = require('honeybadger');
var assert = require('assert-is');


/**
 * Honeybadger transport constructor.
 *
 * @param {Object} options Config object
 * @throws Error If options.apiKey is not present
 */
function Honey(options) {
    options = options || {};

    assert.isObject(options.apiKey, 'Honeybadger transport needs an "apiKey" config option');

    this.name = 'honeybadger';
    this.apiKey = options.apiKey;

    if(!options.logger) {
        options.logger = console;
    }

    this.remote = new Badger(options);

    winston.Transport.call(this, options);
}

util.inherits(Honey, winston.Transport);

winston.transports.Honeybadger = Honey;

Honey.prototype.name = 'honeybadger';


/**
 * Handle log.
 *
 * @param  {String}   level    Level string.
 * @param  {String}   msg      Message string
 * @param  {Object}   meta
 * @param  {Function} callback [description]
 * @return {void}
 */
Honey.prototype.log = function(level, msg, meta, callback) {
    var message = winston.clone(meta || {});

    message.message = msg;
    message.level = (level || '').toLowerCase();

    if (this.silent) {
        return callback(null, true);
    }

    if (level === 'error') {
        callback(null, true);
        return this.remote.send(new Error(message.message), meta);
    }
};

module.exports = Honey;
