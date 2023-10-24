//% weight=70 icon="\uf044" color=#008080 block="binserial"

namespace bserial {
    //% blockId=binserial_write block="binserial_write %text"
    //% shim=bcserial::binserial_writeStrings
    export function binserial_write(text: number): void {
        return;
    } 
    //% blockId=binserial_read block="binserial_read %text"
    //% shim=bcserial::binserial_readStrings
    export function binserial_read(): number {
        return 0;
    }
}