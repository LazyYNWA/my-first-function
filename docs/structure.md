# Структура приложения
## Компоненты приложения
## Классовая структура Зоопарка
    1. StartEngine
      - constructor(data)
      - #privateArrayKnownKeys: Array<string>
      - checkIfKnownPropInData(data): void
      - saveKnownPropInClass(data): void
      - saveUnknownPropInClass(data): void
    2. InformationalBlock extends StartEngine 
    
  
1. Создаем класс Animal
2. Создаем класс Employee
3. Создаем класс FoodBlock
4. Создаем класс VeterinaryBlock
   4.1 Создаем класс Quarantine
   4.2 Создаем класс ChildishBlock
5. Создаем класс InformationalBlock
   5.1 Создаем класс Events
   5.2 Создаем класс Excursions
   5.3 Создаем класс Donuts
6. Создаем класс Equipment
7. Создаем класс Management
7. Проверка
   7.1 Создать мини-зоопарк 
   7.2 Создать зоопарк
   7.3 Создать водный зоопарк Аквариум
8. Оптимизация
9. Сдача
10. Баги
   10.0 Убрать множественное число с названии классов
       10.0.0 Все сотрудники должны создаваться по принципу:
             for (let i = 0; i < data.employees.length; i++) {
                this.employees.push(new Employee(data.employees[i]))
             }  
       10.0.1 Все животные должны создаваться по принципу:
             for (let i = 0; i < data.employees.length; i++) {
                this.employees.push(new Employee(data.employees[i]))
             }  как бы this.animals = [new Animal(data.animal)]
       10.0.2 Всё оборудование (Equipment и Installation) должно создаваться по принципу:
             for (let i = 0; i < data.employees.length; i++) {
                this.employees.push(new Employee(data.employees[i]))
             }  
   10.1 Инфоблок - отдельный раздел
   10.2 Events - отдельные сущности, могут входить внуть Инфоблока, но не наследовать от него
   10.3 Events - должны иметь возможность менять цены
   10.4 Events - добавить имя
   10.5 Удалить класс Excursions ()
   10.6 Donuts - часть инфоблока, не нужны свои сотрудники, перебросить методы в Инфоблок, Donuts удалить как класс - не удалять, т.к. будем использовать в ZOO
   10.7 Equipment - часть инфоблока, не нужны свои сотрудники, перебросить методы в Инфоблок, Equipment как класс
   10.8 Создать класс Installation для стационарного оборудования 
   10.9 Класс Equipment будет обозначать небольшие вещи и персональное оборудование, а потому будет 
   прикрепляться к блоку использования и к МОЛу;
   10.10 Вынести методы buy и repair в инфоблок
   10.11 Удалить Карантин и Детский блок
   10.12 Вынести AnimalBorn в ветеринарный блок
   10.13 Создать ф-цию checkAnimal в ветеринарном блоке, который будет запускать внутр. методы блока и в конце возвращать статистику
   10.14 Создать в ZOO createNewEvent(cost, ), кот. принимает ОБ. описывающий событие, и запускает метод addEvent из инфоблока : this.informationalBlock.addEvent(new Event(eventData))
   10.15 Создать в ZOO ф-цию checkEquipment (вызывает ф-цию checkInstallation из каждого блока верхнего ур-ня 3, кот. проверяет все обмундирование каждого блока и каждого сотрудника - у каждого сотрудника д.б. метод checkYourEquipment) 
   10.16 Создать в ZOO ф-цию checkInstallation (вызывает ф-цию checkInstallation из каждого блока верхнего ур-ня 3, кот. проверяет все оборудование) 
   10.17 Создать в ZOO getDonut, кот. принимает ОБ. описывающий донат, и запускает метод addDonut из инфоблока : this.informationalBlock.addDonut(new Donut(donutData)); возможно стоит добавить фин. класс внутри инфоблока
   10.18 В ZOO (+имя) должно остаться 5 св-в: animals, foodBlock, veterinaryBlock, controlBlock (), name
   10.19 Переименовать инфоблок в ControlBlock, переименовать Event в ZooControlEvent
   10.20 Аквариум отличается от родителя какими-то нюансами, в т.ч. м.б. класс - сегмент:
            class Aquarium extends ZOO {
            constructor(data) {
              super(data);
              class WaterControl {
                checkWaterTemperature() {}
                checkWaterBakteriaLevel() {}
              }
              super.controlBlock.addNewSegment('waterControl', WaterControl, {temp: 37.4})
            }
            }
            ControlBlock
            addNewSegment(segmentName, SegmentClass, segmentData) {
              this[segmentName] = new SegmentClass(segmentData)
            }