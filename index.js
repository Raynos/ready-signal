module.exports = Ready;

function Ready() {
    var listeners = [];
    var args = null;

    function onReady(callback) {
        if (typeof callback === "function") {
            if (args) {
                callback.apply(null, args);
            } else {
                listeners.push(callback);
            }
        }
    }

    onReady.signal = function signalReady() {
        if (args) return; // TODO: error? observe? just use last?
        args = Array.prototype.slice.call(arguments);
        for (var i = 0; i < listeners.length; i++) {
            listeners[i].apply(null, args);
        }
        listeners = [];
        return;
    };

    return onReady;
}
