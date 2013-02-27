# ready-signal

A ready signal. Wait for ready and signal it's ready

## Example

``` js
var Ready = require("ready-signal")
var r1 = Ready()
var r2 = Ready()

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

r3("event data")
```

## Installation

`npm install ready-signal`

## Contributors

 - Raynos

## MIT Licenced
