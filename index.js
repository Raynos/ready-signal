module.exports = Ready;

function Ready() {
    var listeners = [];
    var args = null;

    onReady.emit = onReady;

    return onReady;

    function onReady(callback) {
        if (typeof callback !== "function" && !args) {
            args = arguments;
            listeners.forEach(call);
            return (listeners = []);
        } else if (args) {
            return callback && call(callback);
        }

        listeners.push(callback);
    }

    function call(cb) {
        cb.apply(null, args);
    }
}
