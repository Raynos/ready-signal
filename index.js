module.exports = Ready

function Ready() {
    var listeners = []
    var args

    onready.emit = onready

    return onready

    function onready(callback) {
        if (typeof callback !== "function" && listeners) {
            args = arguments
            var list = listeners
            listeners = undefined
            list.forEach(call)
            return;
        } else if (!listeners) {
            return callback && call(callback)
        }

        listeners.push(callback)
    }

    function call(cb) {
        cb.apply(null, args)
    }
}
