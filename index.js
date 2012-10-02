var CachedEmitter = require("cached-events")

module.exports = Ready

function Ready() {
    var em = CachedEmitter()

    return ready

    function ready(callback) {
        if (callback) {
            em.on("ready", callback)
        } else {
            em.emit("ready")
        }
    }
}
