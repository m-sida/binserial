// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
enum MicroBitSerialMode
{
    ASYNC,
    SYNC_SPINWAIT,
    SYNC_SLEEP
}
basic.forever(() => {
    serial.redirect (SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BaudRate115200)
    bserial.sendchar(70, MicroBitSerialMode.ASYNC)
})