#include "MicroBit.h"

MicroBit uBit;

namespace bserial {
	//%
	void binserial_setport(PinName tx, PinName rx) {
		uBit.init();
		MicroBitSerial bserial(tx, rx);
	}

	//%
	void binserial_close(void) {
		release_fiber();
	}
}
