class Stopwatch {
  constructor() {
    this.isRunning = false;
    this.startTime = 0;
    this.timePassed = 0;
  }

  start() {
    if (this.isRunning) {
      console.log("stopwatch is already running...");
      return;
    }

    this.isRunning = true;
    this.startTime = Date.now() - this.timePassed;
    console.log("stopwatch started...");
  }

  stop() {
    if (!this.isRunning) {
      console.log("stopwatch is already stopped...");
      return;
    }

    this.isRunning = false;
    this.timePassed = Date.now() - this.startTime;
    console.log("stopwatch stoppped...");
  }

  reset() {
    this.isRunning = false;
    this.start = 0;
    this.timePassed = 0;
  }

  getTime() {
    if (this.isRunning) {
      return Date.now() - this.startTime;
    }
    return this.timePassed;
  }

  getFormattedTime() {
    const time = this.getTime();
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    return minutes;
  }
}

const user = new Stopwatch();

user.start();

setTimeout(() => console.log(user.getFormattedTime()), 1000);

user.stop();
console.log(user.getTime());

user.reset();
