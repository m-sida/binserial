#include "MicroBit.h"

MicroBit uBit;

namespace bserial {
	//%
	void binserial_setport(PinName tx, PinName rx) {
		uBit.init();
		MicroBitSerial bserial(tx, rx);
	}

	//%
	void binserial_sendchar(char txdata) {
		uBit.serial.sendChar(txdata);
	}

	//%
	void binserial_close(int x) {
		release_fiber();
	}
}
