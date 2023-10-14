#include "pxt.h"

//using namespace pxt:

namespace bserial {
	//%
	int binserial_sendchar(char txdata, MicroBitSerialMode mode) {
		return uBit.serial.sendChar(txdata, mode);
	}
	//%
	int binserial_send(char txdata) {
		return uBit.serial.send(txdata);
	}
}
