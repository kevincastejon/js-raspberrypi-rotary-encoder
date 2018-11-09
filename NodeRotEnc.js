class NodeRotEnc extends require('events') {
  constructor(pinA = 1, pinB = 0, pinSwitch = 2) {
    super();

    this._py = require('child_process').spawn('python', ['NodeRotEnc.py', pinA, pinB, pinSwitch]);
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
module.exports = NodeRotEnc;
