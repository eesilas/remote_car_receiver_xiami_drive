function L () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 40)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 65)
    basic.pause(500)
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    leftblink()
    xiamiBoard.setIndexColor(0, 0x000000)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        F()
    } else if (receivedNumber == 2) {
        R()
    } else if (receivedNumber == 3) {
        B()
    } else if (receivedNumber == 4) {
        L()
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
        xiamiBoard.OLEDshowUserText("Testing...", 1, 0)
    } else if (receivedNumber == 6) {
        RPS()
    } else if (receivedNumber == 7) {
        dance()
    } else if (receivedNumber == 8) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . . . .
            `)
        pins.servoWritePin(AnalogPin.P8, 180)
        basic.pause(2000)
    } else if (receivedNumber == 9) {
        pins.servoWritePin(AnalogPin.P8, 90)
        basic.showLeds(`
            . # # . .
            . # # . .
            . # # . .
            . . # . .
            . . . . .
            `)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Happy)
        blinking()
    }
})
function F () {
    xiamiBoard.setIndexColor(0, 0x00ffff)
    xiamiBoard.setIndexColor(1, 0x00ffff)
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 65)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
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
function waiting () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
}
function B () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 65)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 65)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    xiamiBoard.setIndexColor(0, 0x000000)
    xiamiBoard.setIndexColor(1, 0x000000)
}
function leftblink () {
    for (let index = 0; index < 4; index++) {
        xiamiBoard.setIndexColor(1, 0xffff00)
        basic.pause(100)
        xiamiBoard.setIndexColor(1, 0xff00ff)
        basic.pause(100)
        xiamiBoard.setIndexColor(1, 0x00ff00)
        basic.pause(100)
    }
}
function init () {
    xiamiBoard.initXiaMiBoard()
    basic.pause(1000)
    xiamiBoard.motorStop(MOTOR.ALL)
    xiamiBoard.setBrightness(51)
    blinking()
}
function dance () {
    blinking()
    basic.showIcon(IconNames.EighthNote)
    music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.InBackground)
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 255)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 255)
    blinking()
    music.stopAllSounds()
}
function R () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 40)
    basic.pause(500)
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 0)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    rightblink()
    xiamiBoard.setIndexColor(1, 0x000000)
}
function RPS () {
    rand = randint(0, 2)
    if (rand == 0) {
        waiting()
        basic.showIcon(IconNames.Square)
    } else if (rand == 1) {
        waiting()
        basic.showIcon(IconNames.Scissors)
    } else {
        waiting()
        basic.showLeds(`
            . . . # #
            . . . # #
            # # # # #
            . . . # #
            . . . # #
            `)
    }
}
function rightblink () {
    for (let index = 0; index < 4; index++) {
        xiamiBoard.setIndexColor(0, 0xffff00)
        basic.pause(100)
        xiamiBoard.setIndexColor(0, 0xff00ff)
        basic.pause(100)
        xiamiBoard.setIndexColor(0, 0x00ff00)
        basic.pause(100)
    }
}
let rand = 0
let receivedNumber2 = 0
radio.setGroup(13)
basic.showIcon(IconNames.Rollerskate)
init()
music.setVolume(255)
basic.forever(function () {
	
})
