class Clock {
  constructor() {
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
    let clock = this;
    setInterval(function () {
      clock._tick();
    }, 1000);

  }

  printTime() {

  console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    if (this.seconds === 60 ) {
      this.seconds = 0;
      this.minutes++;}
    if (this.minutes === 60 ) {
      this.minutes = 0;
      this.hours++;}
    this.printTime();
  }
}

const clock = new Clock();
// console.log(clock);
