
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

// #################### Arrow Functions and this ####################
/*
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

// ################# A propos des objets ####################
/*
Global object

A global object is an object that always exists in the global scope.

In JavaScript, there's always a global object defined. In a web browser, when scripts create global variables defined with the var keyword, they're created as members of the global object. (In Node.js this is not the case.) The global object's interface depends on the execution context in which the script is running. For example:

    In a web browser, any code which the script doesn't specifically start up as a background task has a Window as its global object. This is the vast majority of JavaScript code on the Web.
    Code running in a Worker has a WorkerGlobalScope object as its global object.
    Scripts running under Node.js have an object called global as their global object.

The globalThis global property allows one to access the global object regardless of the current environment.

var statements and function declarations at the top level create properties of the global object. On the other hand, let and const declarations never create properties of the global object.

The properties of the global object are automatically added to the global scope.

In JavaScript, the global object always holds a reference to itself:

console.log(globalThis === globalThis.globalThis); // true (everywhere)
console.log(window === window.window); // true (in a browser)
console.log(self === self.self); // true (in a browser or a Web Worker)
console.log(frames === frames.frames); // true (in a browser)
console.log(global === global.global); // true (in Node.js)

See also

    MDN Web Docs Glossary
// ################ Apropos des Arrow Functions ################
Arrow function expressions

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

    Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
    Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
    Arrow functions cannot use yield within their body and cannot be created as generator functions.
JavaScript Demo: Functions

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]

Syntax

param => expression

(param) => expression

(param1, paramN) => expression

param => {
  statements
}

(param1, paramN) => {
  statements
}

 */
