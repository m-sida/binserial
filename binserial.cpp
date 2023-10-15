#include "pxt.h"
#include "MicroBitSerial.h"
//using namespace pxt:

namespace bcserial {
    //%
    void binserial_redirect(PinName tx, PinName rx) {
        MicroBitSerial myserial(tx, rx);
    }
	//%
	int binserial_sendchar(char txdata, MicroBitSerialMode mode) {
		return uBit.serial.sendChar(MSTR(txdata), mode);
	}
	//%
	int binserial_send(char txdata) {
		return uBit.serial.send(MSTR(txdata));
	}
}
