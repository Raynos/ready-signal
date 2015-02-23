module.exports = Ready;

function Ready() {
    var listeners = [];
    var args = null;

    function onReady(callback) {
        if (typeof callback === "function") {
            if (args) {
                call(callback);
            } else {
                listeners.push(callback);
            }
        }
    }

    onReady.signal = function signalReady() {
        if (args) return; // TODO: error? observe? just use last?
        args = Array.prototype.slice.call(arguments);
        for (var i = 0; i < listeners.length; i++) {
            call(listeners[i]);
        }
        listeners = [];
        return;
    };

    function call(cb) {
        cb.apply(null, args);
    }

    return onReady;
}
