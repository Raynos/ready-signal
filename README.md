# ready-signal

A ready signal. Wait for ready and signal it's ready

## Example

``` js
var Ready = require("ready-signal")
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
```

## Counted example

```js
var CountedReady = require("ready-signal/counted")
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
```

## Installation

`npm install ready-signal`

## Contributors

 - Raynos
 - jcorbin
 - davewhat

## MIT Licenced
