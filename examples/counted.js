var CountedReady = require("../counted")
var counted1 = CountedReady(3)
var counted2 = CountedReady(0)
var counted3 = CountedReady(1)

counted1(function () {
   console.log("called after 3 times")
})

counted1.signal()
counted1.signal()
console.log("before 3rd")
counted1.signal()
console.log("after 3rd")

counted2.signal()

counted2(function onReady() {
    console.log("r2 is already ready")
})

counted3(function ready(ev) {
    console.log("r3 has ev", ev)
})

counted3.signal("event data")
