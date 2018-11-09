# lepioo.noderotaryencoder

## Reliable monitoring of rotary encoders from a raspberry pi

This module allows you to monitor the rotation and the switch state of a rotary encoder from a raspberry pi.
It's use shell to communicate with python awesome [gaugette](https://github.com/guyc/py-gaugette) library.

You need the following libraries installed on your raspberry pi.
[WiringPi](http://wiringpi.com/download-and-install/)
```
    sudo apt-get install wiringpi
```

[Gaugette](https://github.com/guyc/py-gaugette)
and
[Py-Spidev](https://github.com/doceme/py-spidev)
You need to install these two libraries by copying them on your raspberry and using the setup.py files included (python 2.7 needed)

Then install this module that way:
```
    npm install lepioo.noderotaryencoder
```

Usage:
```
    const NodeRotEnc = require("lepioo.noderotaryencoder");
    var nre.on("rotate", (delta) => {
      console.log("Rotation :"+delta);  
    });
    nre.on("pressed", () => {
      console.log("Rotary switch pressed");
    });
    nre.on("released", () => {
      console.log("Rotary switch released");
    });
```

[Github sources](https://github.com/lePioo/NodeRotaryEncoder_Raspberry)
