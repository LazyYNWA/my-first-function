# Текущий список задач
## JS классы
    1. Создаем класс Animals
      1.1 amount - к-во животных
      1.2 typeName - тип животных
      1.3 isQuarantine - находится ли в карантине 
      1.4 animals - массив экземпляров класса Animal
        1.4.1 Создаем класс Animal 
        - weight
        - age
        - name
        - sex
        for (let i = 0; i < data.animals.length; i++) {
          this.animals.push(new Animal(data.animals[i]))
        }  как бы this.animals = [new Animal(data.animal)]  
    2. Создаем класс Employee
      2.1 Добавить св-во экземпляр класса Equipment
      2.2 Добавить метод checkYourEquipment, который проверяет все оборудование
    3. Создаем класс FoodBlock
      3.1 Добавить св-во, кот. явл-ся экземпляром класса Employee 
        for (let i = 0; i < data.employees.length; i++) {
          this.employees.push(new Employee(data.employees[i]))
        }
      3.2 Добавить св-во экземпляр класса Equipment
        3.2.1 Добавить метод checkEquipment, который проверяет все оборудование и вызывает checkYourEquipment для каждого сотрудника
        for (let i = 0; i < data.equipments.length; i++) {
          this.equipments.push(new Equipment(data.equipments[i]))
        }  
      3.3 Добавить св-во экземпляр класса Installation
        3.3.1 Добавить метод checkInstallation, который проверяет все оборудование
        for (let i = 0; i < data.installations.length; i++) {
          this.installations.push(new Installation(data.installations[i]))
        }  
    4. Создаем класс VeterinaryBlock
      4.1 Добавить св-во экземпляр класса Equipment
        4.1.1 Добавить метод checkEquipment, который проверяет все оборудование и вызывает checkYourEquipment для каждого сотрудника
        for (let i = 0; i < data.equipments.length; i++) {
          this.equipments.push(new Equipment(data.equipments[i]))
        }  
      4.2 Добавить св-во экземпляр класса Installation
        4.2.1 Добавить метод checkInstallation, который проверяет все оборудование
        for (let i = 0; i < data.installations.length; i++) {
          this.installations.push(new Installation(data.installations[i]))
        }  
      4.3 Добавить животных
        4.3.1 Добавить св-во, которое является массивом типов животных typesOfAnimal
        4.3.2 Добавить св-во, которое явл. ОБ массивов, где ключ - тип из typesOfAnimal, а знач - массив экземпляров класса Animals
        for (let i = 0; i < data.animals.length; i++) {
          this.animals.push(new Animals(data.animals[i]))
        }  как бы this.animals = [new Animals(data.animal)]
      4.4 Добавить метод animalBorn
      4.5 Добавить метод проверки животных checkAnimal, который будет вызывать startQuarantineFor и animalBorn в зависимости от рандомайзера
      4.6 Добавить метод изменения статуса карантина startQuarantineFor
        4.6.1 Запускает таймер, который со временем отключает карантин для какой-то группы животных
      4.7 Добавить св-во, кот. явл-ся экземпляром класса Employee 
        for (let i = 0; i < data.employees.length; i++) {
          this.employees.push(new Employee(data.employees[i]))
        }
    5. Создаем класс ControlBlock
      5.1 Добавить св-во, кот. будет отдельным экземпляром класса ZooControlEvent
        5.1.1 Добавить метод addEvent
      5.2 Добавить св-во полученных донатов donutionRecords
      5.3 Добавить метод addDonut, кот. принимает цену и имя донора и создает экземпляр класса Donut и записывает его в donutionRecords
      5.4 Добавить св-во экземпляр класса Equipment
        5.4.1 Добавить метод checkEquipment, который проверяет все оборудование и вызывает checkYourEquipment для каждого сотрудника
        for (let i = 0; i < data.equipments.length; i++) {
          this.equipments.push(new Equipment(data.equipments[i]))
        }  
      5.5 Добавить св-во экземпляр класса Installation
        5.5.1 Добавить метод checkInstallation, который проверяет все оборудование
        for (let i = 0; i < data.installations.length; i++) {
          this.installations.push(new Installation(data.installations[i]))
        }  
      5.6 Добавить метод buy 
      5.7 Добавить метод repair
      5.8 Добавить св-во, кот. явл-ся экземпляром класса Employee 
        for (let i = 0; i < data.employees.length; i++) {
          this.employees.push(new Employee(data.employees[i]))
        }
    6. Создаем класс ZooControlEvent
      6.1 Добавить св-во цены (приватное)
      6.2 Добавить ф-цию изменения и добавления цены, также изменение в зав-ти от возраста и акций
      6.3 Добавить имя
      6.4 Добавить тип события (экскурсия, сафари, благотворительный вечер, ночная кормежка)
    7. Создаем класс Donut
    8. Создаем класс Equipment
    9. Создаем класс Installation
    10. Создаем класс ZOO
      10.1 Добавить св-во controlBlock - экземпляр класса ControlBlock 
      10.2 Добавить св-во foodBlock - экземпляр класса FoodBlock 
      10.3 Добавить св-во veterinaryBlock - экземпляр класса VeterinaryBlock 
      10.4 Добавить св-во name
      10.5 Добавить метод getDonut для создания доната, кот. принимает ОБ. описывающий донат, и запускает метод addDonut из инфоблока : this.controlBlock.addDonut(new Donut(donutData));
      10.6 Создать метод createNewEvent(cost, ), кот. принимает ОБ, описывающий событие, и запускает метод addEvent из инфоблока : this.controlBlock.addEvent(new ZooControlEvent(eventData))
      10.7 Создать метод checkEquipment (вызывает ф-ции checkInstallation и checkEquipment из каждого блока верхнего ур-ня 3, кот. проверяет все обмундирование каждого блока и каждого сотрудника - у каждого сотрудника д.б. метод checkYourEquipment) 
    12. Создать класс Aquarium - отличается от родителя, кот. явл. классом ZOO,  какими-то нюансами, в т.ч. м.б. класс - сегмент:
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
    13. Проверка
      13.1 Создать мини-зоопарк 
      13.2 Создать зоопарк
      13.3 Создать водный зоопарк Аквариум

## Интерфейс - Перевести логику ZOO в новосозданую структуру с визуальным отображением по макету
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
      6.4 Стили StartEngine
          6.4.1 Стили класс Animals
            6.4.1.1 Стили класс Animal
          6.4.2 Стили класс Employee
          6.4.3 Стили класс FoodBlock
          6.4.4 Стили класс VeterinaryBlock
          6.4.5 Стили класс ControlBlock
          6.4.6 Стили класс ZooControlEvent
          6.4.7 Стили класс Equipment
          6.4.8 Стили класс Installation
          6.4.9 Стили класс Donut
          6.4.10 Стили класс ZOO
          6.4.11 Стили класс Aquarium
      6.12 Стили формы    
      6.13 Стили для блока с id example-block-2.
    7. Выполнить поочередную привязку html и js.    
      7.1 Действия в Header на кнопки.
      7.2 Действия в форме привязать к js.
      7.3 Добавление новых блоков в div, где находится блок c id example-block-1.
    8. Добавление анимаций (описываются позже).
    9. Проверка  
    10. Оптимизация

## 20-08-2024
    - [ ] Создаем класс Animals (1, 1.1, 1.2, 1.3, 1.4)
    - [ ] Создаем класс Animal (1.4.1)

