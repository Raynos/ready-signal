var assert = require('assert');
var after = require('after');
var Ready = require('./');

test('no callbacks', function() {
    Ready()();
});

test('single callback', function(done) {
    var ready = Ready();
    ready(function() {
        done();
    });

    ready();
});

test('multiple callbacks', function(done) {
    done = after(3, done);

    var ready = Ready();
    ready(done);
    ready(done);
    ready(done);

    ready();
});

test('ignore second trigger', function() {
    var count = 0;
    var ready = Ready();
    ready(function() {
        ++count;
    });

    ready();
    ready();
    ready();

    assert(count === 1);
});

test('fire immediately after trigger', function(done) {
    var ready = Ready();

    ready();

    ready(function() {
        done();
    });
});
