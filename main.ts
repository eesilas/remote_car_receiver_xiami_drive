radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        xiamiBoard.setIndexColor(0, 0x00ffff)
        xiamiBoard.setIndexColor(1, 0x00ffff)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 128)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 128)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        xiamiBoard.setIndexColor(1, 0xffff00)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 128)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 72)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        xiamiBoard.setIndexColor(1, 0x000000)
    } else if (receivedNumber == 3) {
        xiamiBoard.setIndexColor(0, 0xff8000)
        xiamiBoard.setIndexColor(1, 0xff8000)
        basic.pause(100)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 128)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 128)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        xiamiBoard.setIndexColor(0, 0x000000)
        xiamiBoard.setIndexColor(1, 0x000000)
    } else if (receivedNumber == 4) {
        xiamiBoard.setIndexColor(0, 0xffff00)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 72)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 128)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        xiamiBoard.setIndexColor(0, 0x000000)
    } else if (receivedNumber == 5) {
        xiamiBoard.motorStop(MOTOR.ALL)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        blinking()
    } else if (receivedNumber == 6) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 255)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 255)
    } else if (receivedNumber == 7) {
        music.setVolume(127)
        music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
        music.stopAllSounds()
    } else {
        basic.showIcon(IconNames.Happy)
        blinking()
    }
})
function blinking () {
    for (let index = 0; index < 4; index++) {
        xiamiBoard.setIndexColor(0, 0xffff00)
        xiamiBoard.setIndexColor(1, 0xffff00)
        basic.pause(100)
        xiamiBoard.setIndexColor(0, 0xff00ff)
        xiamiBoard.setIndexColor(1, 0xff00ff)
        basic.pause(100)
        xiamiBoard.setIndexColor(0, 0x00ff00)
        xiamiBoard.setIndexColor(1, 0x00ff00)
        basic.pause(100)
    }
}
radio.setGroup(12)
let receivedNumber = 0
basic.showIcon(IconNames.Rollerskate)
xiamiBoard.initXiaMiBoard()
basic.pause(1000)
xiamiBoard.motorStop(MOTOR.ALL)
xiamiBoard.setBrightness(51)
blinking()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
})
