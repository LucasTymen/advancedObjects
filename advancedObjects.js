
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

// ######################### Privacy #########################
/*
const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot._energyLevel = 'high'
console.log(robot.recharge())

/*
Certain languages have privacy built-in for objects, but JavaScript does not
have this feature. Rather, JavaScript developers follow naming conventions that
signal to other developers how to interact with a property. One common
convention is to place an underscore _ before the name of a property to mean
that the property should not be altered. Here’s an example of using _ to
prepend a property.

In later exercises, we’ll cover the use of methods called getters and setters.
Both methods are used to respect the intention of properties prepended, or
began, with _. Getters can return the value of internal properties and setters
can safely reassign property values. For now, let’s see what happens if we can
change properties that don’t have setters or getters.
*/

// ########################### Getters ###########################
/*
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot.energyLevel);


/*
Getters are methods that get and return the internal properties of an object.
But they can do more than just retrieve the value of a property!
Let’s take a look at a getter method:
*/
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method:
person.fullName; // 'John Doe'
/*
Notice that in the getter method above:

    We use the get keyword followed by a function.
    We use an if...else conditional to check if both _firstName and _lastName
    exist (by making sure they both return truthy values) and then return a
    different value depending on the result.
    We can access the calling object’s internal properties using this. In
    fullName, we’re accessing both this._firstName and this._lastName.
    In the last line we call fullName on person. In general, getter methods do
    not need to be called with a set of parentheses. Syntactically, it looks
    like we’re accessing a property.

Now that we’ve gone over syntax, let’s discuss some notable advantages of using
getter methods:

    Getters can perform an action on the data when getting a property.
    Getters can return different values using conditionals.
    In a getter, we can access the properties of the calling object using this.
    The functionality of our code is easier for other developers to understand.

Another thing to keep in mind when using getter (and setter) methods is that
properties cannot share the same name as the getter/setter function. If we do
so, then calling the method will result in an infinite call stack error. One
workaround is to add an underscore before the property name like we did in the
example above.
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
// ################ A propos des Arrow Functions ################
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
