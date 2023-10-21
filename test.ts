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
    //bserial.binserialtx(0)
    //bserial.binserial_sendchar("7", MicroBitSerialMode.SYNC_SLEEP)
    //let ss: string = String.fromCharCode(60)
    //bserial.binserial_send(ss)
    bserial.binserial_write(String.fromCharCode(0))
})