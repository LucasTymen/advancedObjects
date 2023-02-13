const robotFactory = (model, mobile, beep) => {
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop')
    }
  };
};
const tinCan = robotFactory('P-500',true)
console.log(tinCan.beep())

// exemples
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,

    scare() {
      console.log(catchPhrase);
    }
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
