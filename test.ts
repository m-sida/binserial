// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
basic.forever(() => {
    serial.redirect (SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BaudRate115200)
    serial.binserial_sendchar(70)
})