class Clock {
  constructor(hour, min) {
    [hour, min] = Clock.formatTime(hour, min ? min : 0);
    this.hour = hour % 24;
    this.min = min ? min : 0;
    this.parseTime();
    return this;
  }
  static at(hour, min) {
    return new Clock(hour, min);
  }
  static formatTime(hour, min) {
    let time = hour * 60 + min;
    if (time < 0) {
      time = 24 * 60 + (time % (24 * 60));
    }
    console.log(time);
    return [Math.floor(time / 60), time % 60];
  }
  parseTime() {
    this.time =
      String(this.hour).length > 1 ? +String(this.hour) : `0${this.hour}`;
    this.time +=
      String(this.min).length > 1 ? ":" + String(this.min) : `:0${this.min}`;
  }
  subtract(amount) {
    let clock = new Clock(this.hour, this.min - amount);
    return clock;
  }
  add(amount) {
    let clock = new Clock(this.hour, this.min + amount);
    return clock;
  }
  toString() {
    return this.time;
  }
  isEqual(clock) {
    return clock.time === this.time;
  }
}
module.exports = Clock;
