bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
	
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma)))
})
bluetooth.startUartService()
