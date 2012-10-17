var Ready = require("..")
    , r1 = Ready()
    , r2 = Ready()
    , r3 = Ready()

r1(function onReady() {
    console.log("r1 ready")
})

setTimeout(r1, 1000)

r2()

r2(function onReady() {
    console.log("r2 is already ready")
})

r3(function ready(ev) {
    console.log("r3 has ev", ev)
})

r3.emit("event data")
