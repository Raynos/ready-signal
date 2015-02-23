module.exports = Ready;

function Ready() {
    var ready = false;
    var listeners = [];
    var args;

    onReady.emit = onReady;

    return onReady;

    function onReady(callback) {
        if (typeof callback !== "function" && !ready) {
            ready = true;
            args = arguments;
            listeners.forEach(call);
            return (listeners = []);
        } else if (ready) {
            return callback && call(callback);
        }

        listeners.push(callback);
    }

    function call(cb) {
        cb.apply(null, args);
    }
}
