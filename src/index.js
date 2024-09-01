
class CStartEngine {
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

class CAnimals extends CStartEngine {
  constructor(data) {
    super(['amount', 'typeName', 'isQuarantine', 'animals'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    for (let i = 0; i < data.animals.length; i++) {
      this.animals.push(new CAnimal(data.animals[i]))
    }
  }
  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}
class CAnimal extends CStartEngine {
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

class CEmployee extends CStartEngine {
  constructor(data) {
    super(['name', 'age', 'profession', 'sex', 'oklad', 'isWorkingNow', 'experience'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    for (let i = 0; i < data.equipments.length; i++) {
      this.equipments.push(new CEquipment(data.equipments[i]))
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

class CFoodBlock extends CStartEngine {
  constructor(data) {
    super(['name', 'amount', 'type']) /// store?
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    for (let i = 0; i < data.employees.length; i++) {
      this.employees.push(new CEmployee(data.employees[i]))
    }
    for (let i = 0; i < data.equipments.length; i++) {
      this.equipments.push(new Equipment(data.equipments[i]))
    }
    for (let i = 0; i < data.installations.length; i++) {
      this.installations.push(new CInstallation(data.installations[i]))
    }
    for (let i = 0; i < data.stores.length; i++) {
      this.stores.push(data.stores[i])
    }
    for (let i = 0; i < data.preparedFood.length; i++) {
      this.preparedFood.push(data.preparedFood[i])
    }
  }
  checkEquipment() {
    //////////// checkEquipment
    for (let i = 0; i < this.equipments.length; i++) {
      console.log( 'check equipment: ', this.equipments[i])
    }
    for (let i = 0; i < this.employees.length; i++) {
      this.employees[i].checkYourEquipment(this.employees[i]);
    }
  }
  checkInstallation() {
    //////////// checkInstallation
    for (let i = 0; i < this.installations.length; i++) {
      console.log( 'check installation: ', this.installations[i])
    }
  }  
  prepareFeed() { console.log('the food is preparing') }
  feed(data) { console.log('it feed animals') }
  buyFood() { console.log('the food is bought') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class CVeterinaryBlock extends CStartEngine {
  constructor(data) {
    super(['nameMedicine', 'amount', 'type'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    for (let i = 0; i < data.employees.length; i++) {
      this.employees.push(new CEmployee(data.employees[i]))
    }
    for (let i = 0; i < data.equipments.length; i++) {
      this.equipments.push(new CEquipment(data.equipments[i]))
    }
    for (let i = 0; i < data.installations.length; i++) {
      this.installations.push(new CInstallation(data.installations[i]))
    }
    for (let i = 0; i < data.store.length; i++) {
      this.store.push(data.store[i])
    }
  }
  checkEquipment() {
    //////////// checkEquipment
    for (let i = 0; i < this.equipments.length; i++) {
      console.log( 'check equipment: ', this.equipments[i])
    }
    for (let i = 0; i < this.employees.length; i++) {
      checkYourEquipment(this.employees[i]);
    }
  }
  checkInstallation() {
    for (let i = 0; i < this.installations.length; i++) {
      console.log( 'check installation: ', this.installations[i])
    }
  }  
  startQuarantineFor() { console.log('animal great'); setTimeout() } /////////////////
  animalBorn() { console.log('animal is being borned') }
  checkAnimal() {
    if (Math.floor(Math.random() * 2) === 1) {
    startQuarantineFor() 
    } else {
    animalBorn()
    }
  } 

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

// class InformationalBlock extends CStartEngine {
//   constructor(data) {
//     super(['event', 'date', 'info', 'employee'])
//     this.checkIfKnownPropInData(data)
//     this.saveKnownPropInClass(data)
//     this.employee = new CEmployee(data.employee)
//   }
//   listNextEvents() { console.log('List of next events') }
//   listCurrentEvents() { console.log('List of current events') }
//   runEvent() { console.log('start of the event') }
//   stopEvent() { console.log('finish of the event') }
//   costOfEvent() { console.log('cost, discount, childsCost of the event') }

//   checkIfKnownPropInData(data) {
//     super.checkIfKnownPropInData(data)
//   }
//   saveKnownPropInClass(data) {
//     super.saveKnownPropInClass(data)
//   }
// }

// class Events extends InformationalBlock {
//   cost = 100;
//   discount = 10;
//   childsCost = 40;
//   constructor(data) {
//     super(data);
//     super.checkIfKnownPropInData(data)
//     super.saveKnownPropInClass(data)
//     super.saveUnknownPropInClass(data)
//     super.runEvent(data)
//     super.stopEvent(data)
//     super.costOfEvent(data)
//   }
// }

class CDonuts extends CStartEngine {
  constructor(data) {
    super(['date', 'sum', 'donor', 'info'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
  }
  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class CEquipment {
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
    this.employee = new CEmployee(data.employee)
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

class CZOO extends CStartEngine {
  constructor(data) {
    super(data);
    this.animal = new CAnimal(data.animal)
    this.employee = new CEmployee(data.employee)
    this.foodBlock = new CFoodBlock(data.name)
    this.veterinaryBlock = new CVeterinaryBlock(data.name)
    this.quarantine = new Quarantine(data.name)
    this.childishBlock = new ChildishBlock(data.name)
    this.informationalBlock = new InformationalBlock(data.event)
    this.events = new Events(data.event)
    this.excursions = new Excursions(data.event)
    this.donuts = new CDonuts(data.sum)
    this.equipment = new CEquipment(data.name) 
  }
}

class CAquarium extends CZOO {
  constructor(data) {
    super(data);
    this.animal = new CAnimal({'name': 'swordfish', 'rod': 'fish', 'vid': 'predator', 'age': 3, 'sex': 'male', 'height': 3.0, 'weight': 180})
    this.employee = new CEmployee({'name': 'Ihtyandr', 'age': 33, 'profession': 'fisnman', 'sex': 'male', 'oklad': 250000})
    this.foodBlock = new CFoodBlock(data.name)
    this.veterinaryBlock = new CVeterinaryBlock(data.name)
    this.quarantine = new Quarantine(data.name)
    this.childishBlock = new ChildishBlock(data.name)
    this.informationalBlock = new InformationalBlock(data.event)
    this.events = new Events(data.event)
    this.excursions = new Excursions(data.event)
    this.donuts = new CDonuts(data.sum)
    this.equipment = new CEquipment(data.name) 
  }
}

// let Food = new CFoodBlock({'name': 'meat', 'animal': new CAnimal({'name': 'lion', 'rod': 'cats', 'vid': 'predator', 'age': 3, 'sex': 'male', 'height': 1.0, 'weight': 220}), 'count': 4, 'portion': 1.5, 'employee': new CEmployee({'name': 'Frosya', 'age': 33, 'profession': 'cook', 'sex': 'femine', 'oklad': 44500})})

// let Food = new CFoodBlock({'name': 'meat', 'animal': 'lion', 'count': 4, 'portion': 1.3, 'employee': {'name': 'Frosya', 'age': 33, 'profession': 'cook', 'sex': 'femine', 'oklad': 44500}})
