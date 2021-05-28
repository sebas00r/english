input.onButtonPressed(Button.A, function () {
    basic.showString("cold")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("hot")
})
basic.showString("" + (input.temperature()))
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # # # # #
    . # # # .
    `)
