//% weight=70 icon="\uf044" color=#008080 block="sample"
namespace comment {
    //% blockId=show_strings block="sample %v"
    export function noaction(text: string): void {
    }
    //% blockId=basic block="binserialtx %v"
    export function binsend(hex: number): void {
        let chex;
        chex = String.fromCharCode(hex);
        serial.writeString(chex);
    }
}