# Структура приложения
## Компоненты приложения
## Классовая структура Зоопарка
    1. StartEngine
      - #privateArrayKnownKeys: Array<string>
      - checkIfKnownPropInData(data: any): void
      - saveKnownPropInClass(data: any): void
      - saveUnknownPropInClass(data: any): void
    2. Animals  extends StartEngine
      - amount: number
      - typeName: string
      - isQuarantine: boolean
      - animals: Array<Animal>
    3. Animal  extends StartEngine
      - weight: number
      - height: number
      - age: number
      - name: string
      - sex: string (m, f)
      - portion: number
      - diagnosis: string
      - healthStatus: string (sick, healthy, borned)
      - feed(food: {name: string, count: number}): void
      - walk(): void
      - sleep(): void
    4. Employee  extends StartEngine 
      - name: string 
      - age: number 
      - profession: string 
      - sex: string (m, f)
      - oklad: number
      - isWorkingNow: boolean
      - experience: number
      - equipments: Array<Equipment>
      - checkYourEquipment(): void
      - changeSmenaStatus(): void
    5. FoodBlock  extends StartEngine  
      - employees: Array<Employee>
      - equipments: Array<Equipment>
      - installations: Array<Installation>
      - store: Array<{name: string, amount: number, type: string}>
      - preparedFood: Array<{name: string, amount: number, type: string}>
      - prepareFeed(): void
      - feed(animals: Array<Animal>, foodType: string): void
      - buyFood(): void
    6. VeterinaryBlock  extends StartEngine  
      - employees: Array<Employee>
      - equipments: Array<Equipment>
      - installations: Array<Installation>
      - store: Array<{nameMedicine: string, amount: number, type: string}>
      - checkEquipment(): void
      - checkInstallation(): void
      - animalBorn(): void
      - checkAnimal(): void
      - startQuarantineFor(): void
    7. ControlBlock  extends StartEngine  
      - events: Array<ZooControlEvent>
      - eventsArchive: Array<ZooControlEvent>
      - employees: Array<Employee>
      - equipments: Array<Equipment>
      - installations: Array<Installation>
      - store: Array<{nameMedicine: string, amount: number, type: string}>
      - addEvent(): void
      - checkEquipment(): void
      - checkInstallation(): void
      - buy(): void
      - repair(): void
      - getFoolInfo(): void
      - listNextEvents(): void
      - listCurrentEvents(): void
    8. ZooControlEvent  extends StartEngine 
      - price: number
      - name: string
      - type: string (экскурсия, сафари, благотворительный вечер, ночная кормежка)
      - date: string
      - info: string
      - isHasDiscount: boolean
      - discounts: Array<{name; percent}>
      - runEvent(): void
      - stopEvent(): void
      - costOfEvent(): void
    9. Donut  
      - date: string
      - sum: number
      - donor: string
      - info: string
    10. Equipment
      - status: string
      - material: string
      - dateBought: string
      - serviceLife: number
      - vendor: string
      - instruction: string
      - hasGuarantee: boolean
      - price: number
    11. Installation  extends Equipment
      - useEquipment(): void
    12. ZOO 
      - name: string
      - controlBlock: ControlBlock
      - foodBlock: FoodBlock
      - veterinaryBlock: VeterinaryBlock
      - animals: Array<Animals>
      - #typesOfAnimal: Array<typesOfAnimal>
      - getDonut(date: string, sum: number, donor: string, info: string): void
      - createNewEvent(data: ZooControlEvent): void 
      - checkEquipment(): void
    13. Aquarium   extends ZOO
   `constructor(data) {
      super(data);
      class WaterControl {
      checkWaterTemperature() {}
      checkWaterBakteriaLevel() {}
      }
      super.controlBlock.addNewSegment('waterControl', WaterControl, {temp: 37.4})
   }
   addNewSegment(segmentName, SegmentClass, segmentData) {
      this[segmentName] = new SegmentClass(segmentData)
   }
   `
