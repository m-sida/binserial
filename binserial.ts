//% weight=70 icon="\uf044" color=#008080 block="binserial"
namespace bserial {
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
    //% blockId=binserial_redirect block="binserial_redirect %v %v"
    //% shim=bcserial::binserial_redirect
    export function binserial_redirect(tx: number, rx: number): void {
        //
    }
    //% blockId=binserial_sendchar block="binserial_sendchar %v %v"
    //% shim=bcserial::binserial_sendchar
    export function binserial_sendchar(txchar: string, mode: number): number {
        // bserial::binserial_sendchar(txchar, mode);
        return 0;
    }
    //% blockId=binserial_send block="binserial_send %v"
    //% shim=bcserial::binserial_send
    export function binserial_send(txchar: number): number {
        // bserial::binserial_send(txchar);
        return 0;
    }
}