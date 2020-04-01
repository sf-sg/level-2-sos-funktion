function O () {
    lang()
    lang()
    lang()
    basic.pause(Zeichenende)
}
function S () {
    for (let index = 0; index < 3; index++) {
        kurz()
    }
    basic.pause(Zeichenende)
}
function kurz () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(Pause_Punkt)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(Pause_Punkt)
}
function lang () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(Pause_Strich)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(Pause_Punkt)
}
let Zeichenende = 0
let Pause_Strich = 0
let Pause_Punkt = 0
let test = 0
Pause_Punkt = 200
Pause_Strich = 600
Zeichenende = 800
let test2 = 0
basic.forever(function () {
    S()
    O()
    S()
    basic.pause(Math.abs(400))
})
