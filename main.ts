//% weight=70 icon="\uf044" color=#008080 block="binserial"
namespace serial {
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
    //% blockId=binserial_sendchar block="binserial_sendchar %v"
    //% shim=binserial_sendchar
    export function binserial_sendchar(txchar: number): void {
        // bserial::binserial_sendchar(txchar);
    }
    //% blockId=binserial_send block="binserial_send %v"
    //% shim=binserial_send
    export function binserial_send(txchar: number): void {
        // bserial::binserial_send(txchar);
    }
}