var Ready = require("..")
    , r1 = Ready()
    , r2 = Ready()

r1(function onReady() {
    console.log("r1 ready")
})

setTimeout(r1, 1000)

r2()

r2(function onReady() {
    console.log("r2 is already ready")
})
