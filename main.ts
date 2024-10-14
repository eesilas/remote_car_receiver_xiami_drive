radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        xiamiBoard.setIndexColor(0, 0x00ffff)
        xiamiBoard.setIndexColor(1, 0x00ffff)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 128)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 128)
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
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 128)
        basic.pause(100)
        xiamiBoard.motorStop(MOTOR.ALL)
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
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 128)
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
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 128)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 128)
        basic.pause(100)
        xiamiBoard.motorStop(MOTOR.ALL)
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
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
radio.setGroup(12)
let receivedNumber = 0
basic.showIcon(IconNames.Rollerskate)
xiamiBoard.initXiaMiBoard()
basic.pause(1000)
xiamiBoard.motorStop(MOTOR.ALL)
xiamiBoard.setBrightness(51)
basic.forever(function () {
	
})
