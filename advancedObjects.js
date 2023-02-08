
// #################### The this Keyword ####################
/*
const robot = {
  //To add a property, you’re adding another key-value pair to an object.
  //Remember to separate the properties by a comma.
  model:'1E78V2',
  energyLevel:100,
  provideInfo(){
    // If you don’t use this, you will get a reference error.
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
// To invoke a method on an object, use dot notation followed by the name of the
//method with a set of parentheses ().
console.log(robot.provideInfo())

*/

// #################### First exemple shown ####################

const robot = {
  model: 'B-4MI',
  mobile: true,
  greeting() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}
