# Структура приложения
## Компоненты приложения
## Классовая структура Зоопарка
  1. ___CStartEngine___
      - #privateArrayKnownKeys: Array<string>
      - checkIfKnownPropInData(data: any): void
      - saveKnownPropInClass(data: any): void
      - saveUnknownPropInClass(data: any): void
  2.  ___CAnimals___  extends CStartEngine
      - amount: number
      - typeName: string
      - isQuarantine: boolean
      - animals: Array<CAnimal>
  3.  ___CAnimal___  extends CStartEngine
      - weight: number
      - height: number
      - age: number
      - name: string
      - sex: string (m, f)
      - portion: number
      - diagnosis: string
      - healthStatus: string (sick, healthy, borned)
      - feed(food: IAnimalFeed): void
      - walk(): void
      - sleep(): void
  4. ___CEmployee___  extends CStartEngine 
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
  5. ___CFoodBlock___ extends CStartEngine  
      - employees: Array<CEmployee>
      - equipments: Array<CEquipment>
      - installations: Array<CInstallation>
      - store: Array<IFoodBlockStore>
      - preparedFood: Array<IFoodBlockStore>
      - prepareFeed(): void
      - feed(animals: Array<CAnimal>, foodType: string): void
      - buyFood(): void
  6. ___CVeterinaryBlock___  extends CStartEngine  
      - employees: Array<CEmployee>
      - equipments: Array<CEquipment>
      - installations: Array<CInstallation>
      - store: Array<IVeterinaryStore>
      - checkEquipment(): void
      - checkInstallation(): void
      - animalBorn(): void
      - checkAnimal(): void
      - startQuarantineFor(): void
  7. ___CControlBlock___  extends CStartEngine  
      - events: Array<CZooControlEvent>
      - eventsArchive: Array<CZooControlEvent>
      - employees: Array<CEmployee>
      - equipments: Array<CEquipment>
      - installations: Array<CInstallation>
      - store: Array<IControlBlockStore>
      - addEvent(): void
      - checkEquipment(): void
      - checkInstallation(): void
      - buy(): void
      - repair(): void
      - getFoolInfo(): void
      - listNextEvents(): void
      - listCurrentEvents(): void
  8. ___CZooControlEvent___  extends CStartEngine 
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
  9. ___CDonut___  
      - date: string
      - sum: number
      - donor: string
      - info: string
  10. ___CEquipment___
      - status: string
      - material: string
      - dateBought: string
      - serviceLife: number
      - vendor: string
      - instruction: string
      - hasGuarantee: boolean
      - price: number
  11. ___CInstallation___  extends CEquipment
      - useEquipment(): void
  12. ___CZOO___ 
      - name: string
      - controlBlock: CControlBlock
      - foodBlock: CFoodBlock
      - veterinaryBlock: CVeterinaryBlock
      - animals: Array<CAnimals>
      - #typesOfAnimal: Array<typesOfCAnimal>
      - getDonut(IZOOgetDonut): void
      - createNewEvent(data: CZooControlEvent): void 
      - checkEquipment(): void
  13. ___CAquarium___   extends CZOO
  
   ```javascript
   constructor(data) {
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
   ```

```typescript 
  interface IVeterinaryStore { 
    nameMedicine: string; 
    amount: number; 
    type: string;
  }
```

```typescript 
  interface IAnimalFeed { 
    name: string; 
    count: number; 
  }
```
  
```typescript 
  interface IFoodBlockStore { 
    name: string; 
    amount: number; 
    type: string;
  }
```
  
```typescript 
  interface IControlBlockStore { 
    nameMedicine: string; 
    amount: number; 
    type: string;
  }
```
 
```typescript 
  interface IZOOgetDonut { 
    date: string; 
    sum: number; 
    donor: string;
    info: string;
  }
```  