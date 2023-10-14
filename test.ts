// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
basic.forever(() => {
    binserial.binserial_setport(SerialPin.USB_TX, SerialPin.USB_RX)
    // binserial.binserialtx(70)
    binserial.binserial_sendchar(70)
    binserial.binserial_close(0)
})