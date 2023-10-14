//% weight=70 icon="\uf044" color=#008080 block="binserial"
namespace binserial {
    //% blockId=basic block="binserialtx %v"
    export function binsend(hex: number): void {
        let chex;
        if (hex == 0) {
            chex = '\0';
        } else {
            chex = String.fromCharCode(hex);
        }
        serial.writeString(chex);
    }
    //% blockId=basic block="binserial_setport %v %v"
    //% shim=bserial::binserial_setport
    export function binserial_setport(tx: number, rx: number): void {
    }
}