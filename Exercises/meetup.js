class Meetup {
  static TEENTH = [13, 14, 15, 16, 17, 18, 19];
  static WEEKDAYS = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  static LISTOPTS = [
    "teenth",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "last",
  ];
  static daysInMonth = (year, month) => new Date(year, month, 0).getDate();
  constructor(year, month) {
    this.date = new Date(year, month - 1);
    this.year = year;
    this.month = month - 1;
    this.monthDays = Meetup.daysInMonth(year, month);
  }
  getPossibleDates(weekday) {
    let dateList = [];
    let dateNum;
    for (let a = 1; a < 8; a++) {
      let date = new Date(this.year, this.month, a);
      if (Meetup.WEEKDAYS[date.getDay()] === weekday.toLowerCase()) {
        dateNum = a;
        break;
      }
    }
    for (let a = dateNum; a <= this.monthDays; a += 7) {
      dateList.push(a);
    }
    return dateList;
  }
  day(week, opt) {
    let avilDays = this.getPossibleDates(week);
    let option = Meetup.LISTOPTS.indexOf(opt.toLowerCase());

    if (option === 0) {
      let day = Meetup.TEENTH.find((elem) => avilDays.includes(elem));
      return new Date(this.year, this.month, day);
    }
    if (option === Meetup.LISTOPTS.length - 1) {
      return new Date(this.year, this.month, avilDays[avilDays.length - 1]);
    }
    if (!avilDays[option - 1]) {
      // throw new Error("Date not possible");
      return null;
    }
    return new Date(this.year, this.month, avilDays[option - 1]);
  }
}
module.exports = Meetup;
