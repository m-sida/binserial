//% weight=70 icon="\uf044" color=#008080 block="binserial"
namespace binserial {
    //% blockId=binserialtx block="binserialtx %v"
    export function binserialtx(hex: number): void {
        let chex;
        if (hex == 0) {
            chex = '\0';
        } else {
            chex = String.fromCharCode(hex);
        }
        serial.writeString(chex);
    }
    //% blockId=binserial_setport block="binserial_setport %v %v"
    //% shim=bserial::binserial_setport
    export function binserial_setport(tx: number, rx: number): void {
        // bserial::binserial_setport(tx, rx);
    }
    //% blockId=binserial_sendchar block="binserial_sendchar %v"
    //% shim=bserial::binserial_sendchar
    export function binserial_sendchar(txchar: number): void {
        // bserial::binserial_sendchar(txchar);
    }
    //% blockId=binserial_close block="binserial_close"
    //% shim=bserial::binserial_close
    export function binserial_close(x: number): void {
        // bserial::binserial_close();
    }
}