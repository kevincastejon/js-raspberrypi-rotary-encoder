const RotaryEncoder = require("../RotaryEncoder");

// WARNING ! This is WIRINGPI pin numerotation !! please see https://fr.pinout.xyz/pinout/wiringpi#*
const pinClk = 0;
const pinDt = 1;
const pinSwitch = 2;  // Optional switch

const rotary = new RotaryEncoder(pinClk, pinDt, pinSwitch);

rotary.on("rotate", (delta) => {
  console.log("Rotation :"+delta);
});
rotary.on("pressed", () => {
  console.log("Rotary switch pressed");
});
rotary.on("released", () => {
  console.log("Rotary switch released");
});
