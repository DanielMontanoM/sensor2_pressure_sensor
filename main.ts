let strip = neopixel.create(DigitalPin.P14, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
