bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
	
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma)))
    if (bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma)) == "adelente") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma)) == "atras") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma)) == "izquierda") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma)) == "derecha") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
bluetooth.startUartService()
