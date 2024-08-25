
class StartEngine {
  #privateArrayKnownKeys = []
  constructor(data) {
    this.#privateArrayKnownKeys = data
  }
  checkIfKnownPropInData(data) {
    if (this.#privateArrayKnownKeys.find(key => !data[key])) {
      throw new Error(' Do not find key = ' + key)
    }
  }
  saveKnownPropInClass(data) {
    this.#privateArrayKnownKeys.forEach(key => this[key] = data[key])
  }
  saveUnknownPropInClass(data) {
    Object
      .keys(data)
      .filter(key => this.#privateArrayKnownKeys.indexOf(key) === -1)
      .forEach(key => {
        this[key] = data[key]
      })
  }
}

class Animals extends StartEngine {
  constructor(data) {
    super(['amount', 'typeName', 'isQuarantine', 'animals'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    for (let i = 0; i < data.animals.length; i++) {
      this.animals.push(new Animal(data.animals[i]))
    }
  }
  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}
class Animal extends StartEngine {
  constructor(data) {
    super(['name', 'age', 'sex', 'healthStatus', 'height', 'weight', 'portion', 'diagnosis'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
  }
  feed() { console.log('animal feed') }
  walk() { console.log('animal walk') }
  sleep() { console.log('animal sleep') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class Employee extends StartEngine {
  constructor(data) {
    super(['name', 'age', 'profession', 'sex', 'oklad', 'isWorkingNow', 'experience'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    for (let i = 0; i < data.equipments.length; i++) {
      this.equipments.push(new Equipment(data.eEquipments[i]))
    }
  }
  checkYourEquipment() { console.log('check equipment of ',  this.name) } 
  changeSmenaStatus() { console.log('current status smena of ',  this.name, ' ' + this.isWorkingNow ? ' working' : ' rest')}
  // runSmena() { console.log('start of the work') }
  // stopSmena() { console.log('finish of the work') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class FoodBlock extends StartEngine {
  constructor(data) {
    super(['name', 'animal', 'count', 'portion', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.animal = new Animal(data.animal)
    this.employee = new Employee(data.employee)
  }
  prepareFeed() { console.log('food is preparing') }
  feed() { console.log('it feed animals') }
  buyFood() { console.log('food is bought') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class VeterinaryBlock extends StartEngine {
  constructor(data) {
    super(['name', 'diagnosis', 'animal', 'medicine', 'count', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.animal = new Animal(data.animal)
    this.employee = new Employee(data.employee)
  }
  animalSick() { console.log('animal got sick') }
  animalGreat() { console.log('animal great') }
  animalTreated() { console.log('animal is being treated') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class InformationalBlock extends StartEngine {
  constructor(data) {
    super(['event', 'date', 'info', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.employee = new Employee(data.employee)
  }
  listNextEvents() { console.log('List of next events') }
  listCurrentEvents() { console.log('List of current events') }
  runEvent() { console.log('start of the event') }
  stopEvent() { console.log('finish of the event') }
  costOfEvent() { console.log('cost, discount, childsCost of the event') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class Events extends InformationalBlock {
  cost = 100;
  discount = 10;
  childsCost = 40;
  constructor(data) {
    super(data);
    super.checkIfKnownPropInData(data)
    super.saveKnownPropInClass(data)
    super.saveUnknownPropInClass(data)
    super.runEvent(data)
    super.stopEvent(data)
    super.costOfEvent(data)
  }
}

class Donuts extends StartEngine {
  constructor(data) {
    super(['date', 'sum', 'info', 'donor', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.employee = new Employee(data.employee)
  }
  recieveDonat() { console.log('Recieve donat from: ', data.donor, ' amount: ', data.sum) }
  useDonat() { console.log('Use donat') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class Equipment extends StartEngine {
  isWireless = false;
  advantage = 'advantage';
  convenions = 'convenios';
  consamtion = 'consamtion';
  vulnerability = 'vulnerability';
  vendor = 'vendor';

  constructor(data) {
    super(['name', 'property', 'purpose', 'count', 'cost', 'lifespan', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.employee = new Employee(data.employee)
  }
  buyEquipment() { console.log('Buy equipment', data.name, ' from ', this.vendor) }
  useEquipment() { console.log('Use equipment', data.name) }
  repairEquipment() { console.log('Repair equipment', data.name) }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class ZOO extends StartEngine {
  constructor(data) {
    super(data);
    this.animal = new Animal(data.animal)
    this.employee = new Employee(data.employee)
    this.foodBlock = new FoodBlock(data.name)
    this.veterinaryBlock = new VeterinaryBlock(data.name)
    this.quarantine = new Quarantine(data.name)
    this.childishBlock = new ChildishBlock(data.name)
    this.informationalBlock = new InformationalBlock(data.event)
    this.events = new Events(data.event)
    this.excursions = new Excursions(data.event)
    this.donuts = new Donuts(data.sum)
    this.equipment = new Equipment(data.name) 
  }
}

class Aquarium extends ZOO {
  constructor(data) {
    super(data);
    this.animal = new Animal({'name': 'swordfish', 'rod': 'fish', 'vid': 'predator', 'age': 3, 'sex': 'male', 'height': 3.0, 'weight': 180})
    this.employee = new Employee({'name': 'Ihtyandr', 'age': 33, 'profession': 'fisnman', 'sex': 'male', 'oklad': 250000})
    this.foodBlock = new FoodBlock(data.name)
    this.veterinaryBlock = new VeterinaryBlock(data.name)
    this.quarantine = new Quarantine(data.name)
    this.childishBlock = new ChildishBlock(data.name)
    this.informationalBlock = new InformationalBlock(data.event)
    this.events = new Events(data.event)
    this.excursions = new Excursions(data.event)
    this.donuts = new Donuts(data.sum)
    this.equipment = new Equipment(data.name) 
  }
}

// let Food = new FoodBlock({'name': 'meat', 'animal': new Animal({'name': 'lion', 'rod': 'cats', 'vid': 'predator', 'age': 3, 'sex': 'male', 'height': 1.0, 'weight': 220}), 'count': 4, 'portion': 1.5, 'employee': new Employee({'name': 'Frosya', 'age': 33, 'profession': 'cook', 'sex': 'femine', 'oklad': 44500})})

// let Food = new FoodBlock({'name': 'meat', 'animal': 'lion', 'count': 4, 'portion': 1.3, 'employee': {'name': 'Frosya', 'age': 33, 'profession': 'cook', 'sex': 'femine', 'oklad': 44500}})
