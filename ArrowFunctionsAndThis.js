const robot = {
  energyLevel: 100,
  checkEnergy (){
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();

console.log("############ consoles logs ##########");
console.log(robot.energyLevel);
console.log(robot.checkEnergy);

/* original code => suppression of the arrow and the colon.
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
*/
