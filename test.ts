// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 256; index++) {
        bserial.binserial_write(txsend)
        txsend += 1
        basic.pause(10)
    }
})
let txsend = 0
serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate115200
)
txsend = 0
