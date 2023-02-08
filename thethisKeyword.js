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
