class Robot {
  static NameList = [];
  static NAMENUM = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  static NAMECHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static NAMEFORMAT = "CCDDD";

  reset() {
    this.RobotName = undefined;
  }
  static CheckName(name) {
    return !Robot.NameList.includes(name);
  }
  name() {
    while (!this.RobotName) {
      let name = this.genName();
      if (Robot.CheckName(name)) {
        Robot.NameList.push(name);
        this.RobotName = name;
        break;
      }
    }
    return this.RobotName;
  }
  genName() {
    let name = "";
    Robot.NAMEFORMAT.split("").forEach((val) => {
      if (val === "C") {
        name +=
          Robot.NAMECHAR[Math.floor(Math.random() * Robot.NAMECHAR.length)];
        return;
      }
      name += Robot.NAMENUM[Math.floor(Math.random() * Robot.NAMENUM.length)];
    });
    console.log(name);
    return name;
  }
}
module.exports = Robot;
