const path = require('path');

class RotaryEncoder extends require('events') {
  constructor(pinClk, pinDt, pinSwitch=-1) {
    super();
    if (pinClk === undefined) {
      throw new Error('You must provide a CLK pin number');
      return
    }
    if (pinDt === undefined) {
      throw new Error('You must provide a DT pin number');
      return
    }
    this._py = require('child_process').spawn('python', [path.resolve(__dirname, 'RotaryEncoder.py'), pinDt, pinClk, pinSwitch]);
    this._py.stderr.on('data', (dataBuffer) => {
      console.log(dataBuffer.toString());
    })
    this._py.stdout.on('data', (dataBuffer) => {
      var data = dataBuffer.toString();
      if (data[0] == "R") {
        this.emit("rotate",
          parseInt(data.substring(1)));
      } else if (data[0] == "S") {
        if (data[1] == "1") {
          this.emit("pressed");
        } else if (data[1] == "0") {
          this.emit("released");
        }
      }

    });
  }
  destructor() {
    this._py.kill('SIGINT');
  }
}
module.exports = RotaryEncoder;
