var Ready = require("..")
var r1 = Ready()
var r2 = Ready()
var r3 = Ready()

r1(function onReady() {
    console.log("r1 ready")
})

setTimeout(r1.signal, 1000)

r2.signal()

r2(function onReady() {
    console.log("r2 is already ready")
})

r3(function ready(ev) {
    console.log("r3 has ev", ev)
})

r3.signal("event data")
