'use strict';

var ReadySignal = require('./index.js');

module.exports = CountedReadySignal;

function CountedReadySignal(n) {
    var counter = n;
    var ready = ReadySignal();

    var oldSignal = ready.signal;

    ready.signal = function newSignal() {
        if (--counter === 0) {
            oldSignal();
        }
    };

    return ready;
}
