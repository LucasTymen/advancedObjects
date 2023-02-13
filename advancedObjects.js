
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

// ########################### Setters ###########################
/*
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      return "Pass in a number that is greater than or equal to 0";
    }
  }
}
robot.numOfSensors = 100;
console.log(robot.numOfSensors);
console.log(robot)




Along with getter methods, we can also create setter methods which reassign
values of existing properties within an object. Let’s see an example of a
setter method:
*/
const person2 = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
/*
Notice that in the example above:

    We can perform a check for what value is being assigned to this._age.
    When we use the setter method, only values that are numbers will
    reassign this._age
    There are different outputs depending on what values are used to
    reassign this._age.

Then to use the setter method:
*/
person2.age = 40;
console.log(person2._age); // Logs: 40
person2.age = '40'; // Logs: You must assign a number to age
/*
Setter methods like age do not need to be called with a set of parentheses.
Syntactically, it looks like we’re reassigning the value of a property.

Like getter methods, there are similar advantages to using setter methods that
include checking input, performing actions on properties, and displaying a clear
intention for how the object is supposed to be used. Nonetheless, even with a
setter method, it is still possible to directly reassign properties. For
example, in the example above, we can still set ._age directly:
*/
person2._age = 'forty-five'
console.log(person2._age); // Prints forty-five



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

// ################### Built-in Object Methods ###################
/*
In the previous exercises we’ve been creating instances of objects that have
their own methods. But, we can also take advantage of built-in methods for
Objects!

For example, we have access to object instance methods like: .hasOwnProperty(),
.valueOf(), and many more! Practice your documentation reading skills and check
out: MDN’s object instance documentation.

There are also useful Object class methods such as Object.assign(),
Object.entries(), and Object.keys() just to name a few. For a comprehensive
list, browse: MDN’s object instance documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
*/


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

// ################ Review ################
/*
Let’s review the concepts covered in this lesson:

    The object that a method belongs to is called the calling object.
    The this keyword refers to the calling object and can be used to access
    properties of the calling object.
    Methods do not automatically have access to other internal properties of the
    calling object.
    The value of this depends on where the this is being accessed from.
    We cannot use arrow functions as methods if we want to access other internal
    properties.
    JavaScript objects do not have built-in privacy, rather there are
    conventions to follow to notify other developers about the intent of the
    code.
    The usage of an underscore before a property name means that the original
    developer did not intend for that property to be directly changed.
    Setters and getter methods allow for more detailed ways of accessing and
    assigning properties.
    Factory functions allow us to create object instances quickly and
    repeatedly.
    There are different ways to use object destructuring: one way is the
    property value shorthand and another is destructured assignment.
    As with any concept, it is a good skill to learn how to use the
    documentation with objects!

You’re ready to start leveraging more elegant code for creating and accessing
objects in your code!
Instructions

If you want to challenge yourself:

    Find the value of this in a function inside of a method.
    Learn the outcome of using a property that has the exact same name as a
    setter/getter method.
    Create a new factory function that can create object instances of your c
    hoice.
    Read documentation on other destructuring techniques and apply it to your
    code.
    Try out other built-in object methods and learn what they do.


*/
