
// dode original
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
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
