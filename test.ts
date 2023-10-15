// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
enum MicroBitSerialMode
{
    ASYNC,
    SYNC_SPINWAIT,
    SYNC_SLEEP
}
serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BaudRate115200)
//bserial.binserial_redirect(SerialPin.USB_TX, SerialPin.USB_RX)
basic.forever(() => {
    //bserial.binserialtx(50)
    bserial.binserial_sendchar(70, MicroBitSerialMode.SYNC_SLEEP)
})