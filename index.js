module.exports = Ready

function Ready() {
    var ready = false
        , args
        , listeners = []

    onready.emit = onready

    return onready

    function onready(callback) {
        if (typeof callback !== "function" && !ready) {
            ready = true
            args = arguments
            listeners.forEach(call)
            return (listeners = [])
        } else if (ready) {
            return callback()
        }

        listeners.push(callback)

        function call(cb) {
            cb.apply(null, args)
        }
    }
}
