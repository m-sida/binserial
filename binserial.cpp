#include "pxt.h"
#include "MicroBitSerial.h"
//using namespace pxt:

namespace bcserial {
    uint8_t p_txdata;
    //%
    void binserial_redirect(PinName tx, PinName rx) {
        MicroBitSerial myserial(tx, rx);
    }
	//%
	int binserial_sendchar(char txdata, MicroBitSerialMode mode) {
		return uBit.serial.sendChar(txdata, mode);
	}
	//%
	int binserial_send(uint8_t txdata) {
        p_txdata = txdata;
		return uBit.serial.send(&p_txdata, 1);
	}
    //%
    void binserial_writeStrings(char ttext) {
        //if (!ttext) return;

        //uBit.serial.send(MSTR(text.toString()));
        //uBit.serial.send(ManagedString(text,1));
        uBit.serial.sendChar(ttext);
    }
}
