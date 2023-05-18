// 4. DEBUGGING. HANDLING EXCEPTIONS

// 1. Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second)
//  – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й 
//  елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого 
//  розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// function sumSliceArray(arr, first, second) {
//     first = parseInt(first); //make integer
//     second = parseInt(second); //make integer

//     if (isNaN(first) || isNaN(second)) {
//         throw new Error('Invalid input. please enter number');
//     };
//     if (first >= arr.length || second >= arr.length) {
//         throw new Error('Invalid input. indexes are out of array range')
//     };
//     return arr[first - 1] + arr[second - 1];
// };

// const arr = [1, 2, 3, 4, 5, 6, 7];
// try {
//     const result = sumSliceArray(arr, 3, 9);
//     console.log(result);
// } catch (error) {
//     console.log(error, error.message);
// };
// 2. Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач)
// та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу
// RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! 
// Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в 
// полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці
//  catch передбачена можливість виведення назви та опису помилки.

// function checkAge() {
//     try {
//         const name = prompt('Enter your name');
//         const age = prompt('Enter your age');
//         const status = prompt('Enter your status');
//         if (age.trim() === "") {
//             throw new Error('The field is empty');
//         };
//         if (isNaN(age)) throw new TypeError('Incorect value, please enter number');
//         if (age < 18 || age > 70) throw new RangeError('You are not allowed to watch film');
//         if (status !== 'admin' && status !== 'moderator' && status !== 'user') throw new EvalError('Invalid status');
//         alert('Enjoy the film');
//     } catch (error) {
//         alert(`${error.name}: ${error.message}`);
//     };
// };
// checkAge();

// 3. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота
//  прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у 
//  випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

// function calcRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number') {
//         throw "Parametr is not a number";
//     };
//     return width * height;
// };
// try {
//     console.log(calcRectangleArea(3, 'p'));
// } catch (error) {
//     console.log(error);
// };

// 4. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 
// MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція 
// повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у
//  вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));  // May
// console.log(showMonthName(14)); // MonthException Incorrect month number

// class MonthException {
//     constructor(message) {
//         this.message = message;
//         this.name = 'MonthException';
//     };
// };

// function showMonthName(month) {
//     month = month - 1; //array numeraton
//     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
//     if (months[month] !== undefined) {
//         return months[month];
//     } else {
//         throw new MonthException('Incorect month');
//     };
// };

// try {
//     let myMonth = 4;
//     let monthName = showMonthName(myMonth);
//     console.log(monthName);
// } catch (e) {
//     console.error(e.name, e.message);
// };


// 5. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить
//  значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням
//  функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про 
//  помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// // Error: ID must not be negative: -12
// // [ {id: 7}, {id: 44}, {id: 22} ]

// function showUser(id) {
//     if (id < 0) {
//         throw new Error('Id must not be negative: ' + id);
//     };
//     return { id: id };
// };

// function showUsers(ids) {
//     let result = [];
//     ids.forEach(function (id) {
//         try {
//             let person = showUser(id);
//             result.push(person);
//         } catch (exception) {
//             console.log(exception.message);
//         };
//     });
//     return result;
// };
// console.log(showUsers([7, -12, 44, 22]));