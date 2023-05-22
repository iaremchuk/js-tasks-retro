// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES

// 1. Напишіть клас Круг та реалізуйте функціонал:
//  - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
//  - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
//  - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
//  - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
//  - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
//  - Визначте метод перевірки попадання крапки до кола;
//  - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

// class Circle {
//     constructor(x, y, radius) {
//         this._center = { x: x, y: y };
//         this._radius = radius;
//     }
//     calcPerimetr() {
//         return 2 * Math.PI * this._radius;
//     }
//     static perimetr(radius) {
//         return 2 * Math.PI * radius;
//     }
//     circleCopy() {
//         return new Circle(...Object.values(this));
//     }
//     static circleObject(x, y, radius) {
//         return new Circle(x, y, radius);
//     }
//     isPointInside(x, y) {
//         const formula = (x ** 2) + (y ** 2) - (this._radius ** 2);
//         formula < 0 ? console.log('Inside') : console.log('Outside');
//     }
//     toString() {
//         return `Center is ${this._center.x} - ${this._center.y}; Radius is: ${this._radius}`;
//     }
// }
// const circle = new Circle(1, 5, 7);
// circle.isPointInside(2, 1);
// console.log(circle._center);
// console.log(circle._radius);
// console.log(circle.perimetr); // undefined
// console.log(circle.calcPerimetr());
// console.log(circle.circleCopy());
// console.log(circle.toString());

// 2. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };
// const propsCount = currentObject => Object.keys(currentObject).length;
// console.log(propsCount(mentor)); //3

// 3. Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(),
//  який виводить у консоль ім’я і прізвище особи. 
//  - Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year 
//  (рік вступу до університету). 
//  - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, 
//  але і по-батькові (midleName) студента. 
//  - Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента 
//  (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
// Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4

// class Person {
//     constructor(name, surname) {
//         this._name = name;
//         this._surname = surname;
//     }
//     showFullName() {
//         return `Name is: ${this._name} Surname is: ${this._surname}`;
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this._year = year;
//     }
//     showFullName(middleName) {
//         return `${super.showFullName()} Middle name is: ${middleName}`;
//     }
//     showCourse() {
//         try {
//             const date = new Date;
//             const course = date.getFullYear() - this._year;
//             if (course < 1 || course > 6) {
//                 throw new RangeError('The course is out of the range');
//             }
//             return course;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4


// 4. А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
//  - поле, яке зберігає колір маркера;
//  - поле, яке зберігає кількість чорнила в маркері (у відсотках);
//  - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
//     В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод 
// для заправки маркера. Продемонструвати роботу написаних методів

// const text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ???????????';
// class Marker {
//     constructor(color, inkAmount) {
//         this.color = color;
//         this.inkAmount = inkAmount;
//     }
//     print(text) {
//         text.split('').forEach(char => {//split string by each element and do smth with it by using forEach
//             document.write(`<span style="color: ${this.color}; opacity: ${this.inkAmount};">${char}</span>`);
//             this.inkAmount -= 0.05;
//         });
//     }
// }

// class RefillableMarker extends Marker {
//     constructor(color, inkAmount) {
//         super(color, inkAmount);
//     }
//     print(text) {
//         text.split('').forEach(char => {//split string by each element and do smth with it by using forEach
//             while (this.inkAmount < 1) {
//                 this.refill();
//             }
//             document.write(`<span style="color: ${this.color}; opacity: ${this.inkAmount};">${char}</span>`);
//             this.inkAmount -= 0.05;
//         });
//     }
//     refill() {
//         this.inkAmount += 0.05;
//     }
// }
// let marker = new Marker('black', 1);
// marker.print(text);
// let marker2 = new Marker('red', 0.5);
// marker2.print(text);
// let refillableMarker = new RefillableMarker('black', 1);
// refillableMarker.print(text);
// let refillableMarker2 = new RefillableMarker('red', 0.5);
// refillableMarker2.print(text);

// 5. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище),
//  dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
//     1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки 
//     dayRate на кількість відпрацьованих днів workingDays. 
//     2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник 
//     при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//     3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
//     4) Вивести значення зарплати з новим experience.
//     5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
//      Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:  
//       worker_fullName: salary_value 
//     6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
// Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .

// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .

// Output example:
// John Johnson

// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584

// class Worker {
//     static workers = [];
//     static addToWorkers(instance) {
//         Worker.workers.push(instance);
//     }
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         Worker.addToWorkers(this);
//     }
//     showSalary() {
//         return this.dayRate * this.workingDays;
//     }
//     set setExp(value) {
//         this.#experience = value;
//     }
//     get showExp() {
//         return this.#experience;
//     }
//     showSalaryWithExperience() {
//         return this.showSalary() * this.#experience;
//     }
//     static sort() {
//         let arr = Worker.workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
//         arr.forEach(el => {
//             console.log(`${el.fullName}: ${el.showSalaryWithExperience()}`);
//         });
//     };
// };
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalary());
// console.log("New experience: " + worker1.showExp);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalary());
// console.log("New experience: " + worker2.showExp);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalary());
// console.log("New experience: " + worker3.showExp);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());

// let worker4 = new Worker("Kit Kit", 30, 29);
// console.log(worker4.fullName);
// console.log(worker4.fullName + ' salary: ' + worker4.showSalary());
// console.log("New experience: " + worker4.showExp);
// console.log(worker4.fullName + ' salary: ' + worker4.showSalaryWithExperience());
// worker4.setExp = 1.5;
// console.log("New experience: " + worker4.showExp);
// console.log(worker4.fullName + ' salary: ' + worker4.showSalaryWithExperience());
// Worker.sort();