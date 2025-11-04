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
    const time = this.getTime();
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    if (this.isRunning) {
      //   return Date.now() - this.startTime;
      return `${minutes}`;
    }
    return this.timePassed;
  }
}

const user = new Stopwatch();

user.start();

setTimeout(() => console.log(user.getTime()), 1000);

user.stop();
console.log(user.getTime());

user.reset();
