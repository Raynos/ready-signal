module.exports = Ready;

function Ready() {
    var listeners = [];
    var args = null;

    return onReady;

    function onReady(callback) {
        if (typeof callback !== "function" && !args) {
            args = Array.prototype.slice.call(arguments);
            listeners.forEach(call);
            return (listeners = []);
        }
        if (typeof callback === "function") {
            if (args) {
                call(callback);
            } else {
                listeners.push(callback);
            }
        }
    }

    function call(cb) {
        cb.apply(null, args);
    }
}
