# Текущий список задач
## JS классы
1. Создаем класс __CAnimals__
    1. amount - к-во животных
    2. typeName - тип животных
    3. isQuarantine - находится ли в карантине 
    4. animals - массив экземпляров класса CAnimal
        1. Создаем класс __CAnimal__ 
        - weight
        - height
        - age
        - name
        - sex
        - portion
        - diagnosis
        - healthStatus (sick, healthy, borned)
        - feed()
        - walk()
        - sleep()
  ```javascript
  for (let i = 0; i < data.animals.length; i++) {
    this.animals.push(new CAnimal(data.animals[i]))
  }  как бы this.animals = [new CAnimal(data.animal)]
  ```  
2. Создаем класс __CEmployee__
    1. Добавить св-во экземпляр класса _CEquipment_
    2. Добавить метод _checkYourEquipment()_, который проверяет все оборудование
    3. Добавить метод _changeSmenaStatus()_
    4. Создаем св-ва:
        - name 
        - age 
        - profession 
        - sex 
        - oklad
        - isWorkingNow
        - experience

3. Создаем класс __CFoodBlock__
      1. Добавить св-во, кот. явл-ся экземпляром класса _CEmployee_
    ``` javascript
      for (let i = 0; i < data.animals.length; i++) {
        this.animals.push(new CAnimal(data.animals[i]))
      }  как бы this.animals = [new CAnimal(data.animal)]
      ```  
      ```javascript
      for (let i = 0; i < data.employees.length; i++) {
        this.employees.push(new CEmployee(data.employees[i]))
      }  как бы this.employees = [new CEmployee(data.employees)]
      ```  
      2. Добавить св-во экземпляр класса _CEquipment_
          1. Добавить метод _checkEquipment()_, который проверяет все оборудование и вызывает _checkYourEquipment()_ для каждого сотрудника
          ```javascript
          for (let i = 0; i < data.equipments.length; i++) {
            this.equipments.push(new CEquipment(data.equipments[i]))
          }  
          ```  
      3. Добавить св-во экземпляр класса _CInstallation_
          1. Добавить метод _checkInstallation()_, который проверяет все оборудование
          ```javascript
          for (let i = 0; i < data.installations.length; i++) {
            this.installations.push(new CInstallation(data.installations[i]))
          }  
          ```  
      4. Добавить метод _prepareFeed()_
      5. Добавить метод _feed()_
      6. Добавить метод _buyFood()_
      7. Создать св-во _store_, кот. явл-ся массивом ОБ с ключами: 
        - name
        - amount
        - type
      8. Добавить св-во массив готовой еды preparedFood: 
        - name
        - amount
        - type

4. Создаем класс __CVeterinaryBlock__
      1. Добавить св-во экземпляр класса _CEquipment_
            1. Добавить метод _checkEquipment()_, который проверяет все оборудование и вызывает _checkYourEquipment()_ для каждого сотрудника
    ```javascript
    for (let i = 0; i < data.equipments.length; i++) {
      this.equipments.push(new CEquipment(data.equipments[i]))
    }  
    ```  
      2. Добавить св-во экземпляр класса __CInstallation__
          1. Добавить метод _checkInstallation()_, который проверяет все оборудование
          ```javascript
          for (let i = 0; i < data.installations.length; i++) {
            this.installations.push(new CInstallation(data.installations[i]))
          }  
          ```  
      3. Добавить метод _animalBorn()_
      4. Добавить метод проверки животных _checkAnimal()_, который будет вызывать _startQuarantineFor()_ и _animalBorn()_ в зависимости от рандомайзера
      5. Добавить метод изменения статуса карантина _startQuarantineFor()_
          1. Запускает таймер, который со временем отключает карантин для какой-то группы животных
      6. Добавить св-во, кот. явл-ся экземпляром класса CEmployee 
          ```javascript
          for (let i = 0; i < data.employees.length; i++) {
            this.employees.push(new CEmployee(data.employees[i]))
          }
          ```  
      7. Создать св-во _store_, кот. явл-ся массивом ОБ с ключами: 
        - nameMedicine
        - amount 
        - type  
  
  5. Создаем класс __CControlBlock__
      1. Добавить св-во, кот. будет отдельным экземпляром класса _CZooControlEvent_
        1. Добавить метод _addEvent()_
      2. Добавить св-во полученных донатов _donutionRecords_
      3. Добавить метод _addDonut()_, кот. принимает цену и имя донора и создает экземпляр класса _CDonut_ и записывает его в _donutionRecords_
      4. Добавить св-во экземпляр класса _CEquipment_
        1. Добавить метод _checkEquipment()_, который проверяет все оборудование и вызывает _checkYourEquipment()_ для каждого сотрудника
      ```javascript
              for (let i = 0; i < data.equipments.length; i++) {
                this.equipments.push(new CEquipment(data.equipments[i]))
              }  
      ```  
      5. Добавить св-во экземпляр класса _CInstallation_
        1. Добавить метод _checkInstallation()_, который проверяет все оборудование
      ```javascript
      for (let i = 0; i < data.installations.length; i++) {
        this.installations.push(new CInstallation(data.installations[i]))
      }  
      ```  
      6. Добавить метод _buy()_ 
      7. Добавить метод _repair()_
      8. Добавить св-во, кот. явл-ся экземпляром класса _CEmployee_ 
      ```javascript
      for (let i = 0; i < data.employees.length; i++) {
                this.employees.push(new CEmployee(data.employees[i]))
      }
      ```  
      9. Добавить св-во _eventsArchive_
      10. Добавить метод _getFoolInfo()_
      11. Добавить метод _listNextEvents()_
      12. Добавить метод _listCurrentEvents()_
      13. Создать св-во _store_, кот. явл-ся массивом ОБ с ключами: 
        - name
        - amount
        - type
 
  6. Создаем класс __CZooControlEvent__
      1. Добавить св-во _price_ 
      2. Добавить _ф-цию изменения и добавления цены changePrice() ???_, также изменение в зав-ти от возраста и акций
      3. Добавить _name_
      4. Добавить тип события (экскурсия, сафари, благотворительный вечер, ночная кормежка) _type_
      5. Добавить св-ва:
          - date
          - info
          - isHasDiscount
          - discounts - массив {name; percent}
      6. Добавить метод _runEvent()_
      7. Добавить метод _stopEvent()_
      8. Добавить метод _costOfEvent()_
  7. Создаем класс __CDonut__
      1. Добавить св-ва:
          - date
          - sum
          - donor
          - info
  8. Создаем класс __CEquipment__
      1. Добавить св-ва:
          - status
          - material
          - dateBought
          - serviceLife
          - vendor
          - instruction
          - hasGuarantee
          - price
  9. Создаем класс __CInstallation__, который наследуется от _CEquipment_
      1. Создать метод _useEquipment()_
  10. Создаем класс __CZOO__
      1. Добавить св-во _controlBlock_ - экземпляр класса _CControlBlock_ 
      2. Добавить св-во _foodBlock_ - экземпляр класса CFoodBlock 
      3. Добавить св-во _veterinaryBlock_ - экземпляр класса _CVeterinaryBlock_ 
      4. Добавить св-во _name_
      5. Добавить метод _getDonut()_ для создания доната, кот. принимает ОБ. описывающий донат, и запускает метод _addDonut()_ из инфоблока : this.controlBlock.addDonut(new CDonut(donutData));
      6. Создать метод _createNewEvent(cost, )_, кот. принимает ОБ, описывающий событие, и запускает метод _addEvent()_ из инфоблока : this.controlBlock.addEvent(new CZooControlEvent(eventData))
      7. Создать метод _checkEquipment()_ (вызывает ф-ции _checkInstallation()_ и _checkEquipment()_ из каждого блока верхнего ур-ня 3, кот. проверяет все обмундирование каждого блока и каждого сотрудника - у каждого сотрудника д.б. метод _checkYourEquipment()_) 
      8. Добавить животных
        1. Добавить св-во, которое является массивом типов животных _typesOfAnimal_
        2. Добавить св-во, которое явл. ОБ массивов, где ключ - тип из _typesOfAnimal_, а знач - массив экземпляров класса _CAnimals_
 ```javascript
  for (let i = 0; i < data.animals.length; i++) {
          this.animals.push(new CAnimals(data.animals[i]))
  }  как бы this.animals = [new CAnimals(data.animal)]
```  
  11. Создать класс __CAquarium__ - отличается от родителя, кот. явл. классом _CZOO_,  какими-то нюансами, в т.ч. м. класс - сегмент:
```javascript
  class Aquarium extends CZOO {
      constructor(data) {
        super(data);
        class WaterControl {
          checkWaterTemperature() {}
          checkWaterBakteriaLevel() {}
        }
        super.controlBlock.addNewSegment('waterControl', WaterControl, {temp: 37.4})
      }
  }
  CControlBlock
      addNewSegment(segmentName, SegmentClass, segmentData) {
        this[segmentName] = new SegmentClass(segmentData)
      }
```  
  12. Проверка
      1. Создать мини-зоопарк 
      2. Создать зоопарк
      3. Создать водный зоопарк Аквариум

## Интерфейс - Перевести логику CZOO в новосозданую структуру с визуальным отображением по макету
    1. Создать отдельную папку, в которой будет следующая структура: 
      1.1 src/index.js - содержит весь код задания про Зоопарк, включая запуск;
      1.2 index.html   - упрощенное визуальное представление системы и экземпляра;
      1.3 style/style.css - стиль к вашему визуальному представлению;
      1.4 assets/image - папка с картинками;
      1.5 assets/font  - папка со шрифтами;
      1.6 docs/README.md - главное и общее описание проекта, основные правила и особенности, а также доп. информация, такая как: тек. версия, партнеры, ссылки на документации и прочее;
      1.7 docs/structure.md - общая структура и архитектура проекта;
      1.8 docs/rules.md - правила для создания, использования и удаления проекта, а также пароли, ссылки и инструкции;
      1.9 docs/tasks.md - список поставленных задач (с датами и состоянием выполнения);
      1.10 docs/versions.md - список версий пректа и обновлений, касаемых их;
    2. Перенести основную логику в папку главного скрипта src/index.js.
    3. Создать базовую структуру в html и css.
    4. Описать каркас приложения в html.
    5. Дополнить js-код относительно задачи.
      5.1 Внести изменения в файл structure.md относительно измененного кода.
    6. Выполнить поочередную стилизацию элементов.
      6.1 Стили Header
      6.2 Стили Footer
      6.3 Стили для блока с id example-block-1
      6.4 Стили CStartEngine
          6.4.1 Стили класс CAnimals
            6.4.1.1 Стили класс CAnimal
          6.4.2 Стили класс CEmployee
          6.4.3 Стили класс CFoodBlock
          6.4.4 Стили класс CVeterinaryBlock
          6.4.5 Стили класс CControlBlock
          6.4.6 Стили класс CZooControlEvent
          6.4.7 Стили класс CEquipment
          6.4.8 Стили класс CInstallation
          6.4.9 Стили класс CDonut
          6.4.10 Стили класс CZOO
          6.4.11 Стили класс CAquarium
      6.12 Стили формы    
      6.13 Стили для блока с id example-block-2.
    7. Выполнить поочередную привязку html и js.    
      7.1 Действия в Header на кнопки.
      7.2 Действия в форме привязать к js.
      7.3 Добавление новых блоков в div, где находится блок c id example-block-1.
    8. Добавление анимаций (описываются позже).
    9. Проверка  
    10. Оптимизация


