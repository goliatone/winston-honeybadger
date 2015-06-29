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

function Honey(options) {
    options = options || {};

    this.name = 'honeybadger';
    this.apiKey = options.apiKey;

    if(!options.logger) options.logger = console;

    this.remote = new Badger(options);

    winston.Transport.call(this, options);
}

util.inherits(Honey, winston.Transport);

winston.transports.Honey = Honey;

Honey.prototype.name = 'honeybadger';

Honey.prototype.log = function(level, msg, meta, callback) {
    var _this = this;

    var message = winston.clone(meta || {});
    message.level = level;
    message.message = msg;

    if (this.silent) {
        return callback(null, true);
    }

    if (level === 'error') {
        callback(null, true);
        return this.remote.send(new Error(message.message), meta);
    }
};

module.exports = Honey;
