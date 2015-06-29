// 'use strict';
/*jshint global describe*/

var assert = require('chai').assert;
var winston = require('winston');

var Honeybadger = require('..');

var HONEYBADGER_API_KEY = 'MY_KEY';

describe('wiston-honeybadger', function(){

    describe('constructor', function(){
        it('should provide a DEFAULTS object', function(){
            assert.isObject(Honeybadger.DEFAULTS);
        });
    });

    describe('transport', function(){

        beforeEach(function(){
            winston.add(Honeybadger, {apiKey: HONEYBADGER_API_KEY });
        });

        it('should add Honeybadger transport to winston.Transport', function(){
            assert.isObject(winston.transports.Honeybadger);
        });
    })
});
