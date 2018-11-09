import time
import gaugette.gpio
import gaugette.rotary_encoder
import gaugette.switch
import sys
from sys import argv

A_PIN = int(argv[1])
B_PIN = int(argv[2])
SW_PIN = int(argv[3])
gpio = gaugette.gpio.GPIO()
sw = gaugette.switch.Switch(gpio, SW_PIN)
last_state = sw.get_state()
encoder = gaugette.rotary_encoder.RotaryEncoder(gpio, A_PIN, B_PIN)
encoder.start()
while True:
	delta = encoder.get_cycles()
	state = sw.get_state()
	if delta!=0:
		sys.stdout.write("R"+str(delta))
		sys.stdout.flush()
	else:
		time.sleep(0.1)
		if state != last_state:
			sys.stdout.write("S"+str(state))
			sys.stdout.flush()
			last_state = state
