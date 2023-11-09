//% weight=70 icon="\uf044" color=#008080 block="binserial"
//% advanced=true

namespace bserial {
    //% blockId=binserial_write block="binserial_write %text"
    //% shim=bcserial::binserial_writeStrings
    export function binserial_write(text: number): void {
        return;
    } 
}