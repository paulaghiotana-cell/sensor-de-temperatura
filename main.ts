let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    basic.showString("" + temperatura + "C")
    basic.pause(2000)
})
