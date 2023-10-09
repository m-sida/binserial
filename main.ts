//% weight=70 icon="\uf044" color=#008080 block="binserial"
namespace binserial {
    //% blockId=basic block="binserialtx %v"
    export function binsend(hex: number): void {
        let chex;
        chex = String.fromCharCode(hex);
        serial.writeString(chex);
    }
}