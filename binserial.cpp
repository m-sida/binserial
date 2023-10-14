//#include "pxt.h"

//using namespace pxt:

namespace serial {
	//%
	int binserial_sendchar(char txdata) {
		return uBit.serial.sendChar(txdata);
	}
	//%
	void binserial_send(char txdata) {
		uBit.serial.send(txdata);
	}
}
