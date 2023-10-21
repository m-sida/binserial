//% weight=70 icon="\uf044" color=#008080 block="binserial"

namespace bserial {
    //% blockId=binserialtx block="binserialtx %hex"
    export function binserialtx(hex: number): void {
        let chex;
        if (hex == 0) {
            chex = "\u0000";
        } else {
            chex = String.fromCharCode(hex);
        }
        serial.writeString(chex);
        //serial.sendString(chex);
    }
    //% blockId=binserial_redirect block="binserial_redirect %tx %rx"
    //% shim=bcserial::binserial_redirect
    export function binserial_redirect(tx: number, rx: number): void {
        //
    }
    //% blockId=binserial_sendchar block="binserial_sendchar %txchar %mode"
    //% shim=bcserial::binserial_sendchar
    export function binserial_sendchar(txchar: string, mode: number): number {
        // bserial::binserial_sendchar(txchar, mode);
        return 0;
    }
    //% blockId=binserial_send block="binserial_send %txchar"
    //% shim=bcserial::binserial_send
    export function binserial_send(txchar: string): number {
        // bserial::binserial_sendchar(txchar, mode);
        return 0;
    }
    //% blockId=binserial_writestring block="binserial_writeString %text"
    export function binserial_writeString(text: string): void {
        bcserial.binserial_writeString(text);
    } 
}