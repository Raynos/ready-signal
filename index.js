var CachedEmitter = require("cached-events")
    , toArray = require("to-array")

module.exports = Ready

function Ready() {
    var em = CachedEmitter()

    ready.emit = emit

    return ready

    function ready(callback) {
        if (callback) {
            em.on("ready", callback)
        } else {
            em.emit("ready")
        }
    }

    function emit() {
        var args = toArray(arguments)

        args.unshift("ready")

        em.emit.apply(em, args)
    }
}
