#include "pxt.h"
#include "MicroBitSerial.h"

namespace bcserial {
    uint8_t p_txdata;
    //%
    void binserial_writeStrings(char ttext) {
        uBit.serial.sendChar(ttext/2);
        return;
    }
    //%
    int binserial_readStrings(void) {
        return uBit.serial.read();
    }
}