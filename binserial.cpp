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
		return uBit.serial.sendChar(txdata, mode);
	}
	//%
    //% txdata.shadowOptions.toString=true
	void bcbinserial_sendString(String txdata) {
	    uBit.serial.send(MSTR(txdata));
    }
}
