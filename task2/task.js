// 2. OPERATORS. TYPE CONVERSIONS. ARRAYS. CONDITIONAL STATEMENT

// 1. Дано три цілих числа: a, b, c. Перевірте істинність висловлювання: a < b < c
// const a = 1;
// const b = 3;
// const c = 2;
// a < b && b < c ? console.log('True') : console.log('False');

// 2. Є такий код:
// let x = 1;
// let y = 2;

// let res1 = '' + x + y;// Допишіть код, необхідно використовувати змінні x і y
// let res1 = String(x) + y; // Допишіть код, необхідно використовувати змінні x і y
// let res1 = x.toString() + y// Допишіть код, необхідно використовувати змінні x і y
// let res1 = `${x}` + y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""

// let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
// let res2 = !!x + String(y);// As x = 1, and 1 equals ture, we put !x - that means false and another !!x makes true
// console.log(res2); // ""true2""
// console.log(typeof res2); // ""string""

// let res3 = (x < y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // ""boolean""

// let res4 = String(y) - x;// We can use here -,*,/ ect except for +, that cannot be used here
// console.log(res4); // NaN
// console.log(typeof res4); // ""number""
// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

// 3. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну 
// isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови 
// вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”
// const isAdult = prompt('Enter your age');
// isAdult > 18 ? alert('Ви досягли повнолітнього віку') : alert('Ви ще надто молоді');
// 4. Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі 
// входження цього числа із поточного масиву.
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let newArr = [];
// let max = -1;
// arr.forEach(item => {
//     let count = 0;
//     for(let j = 0; j< arr.length; j++){
//         if(arr[i] == item){
//             count++;
//         }
//     }
//     count++;
//     if(count>max){
//         max = count;
//     }
//     return max;
// });
// let index = newArr.indexOf(max);
// let data = arr[max];// 5
// arr.filter(item => item !== data);
// console.log(data); //5
// arr = arr.filter(element => element != data);
// console.log(arr) // [4, 2, 1, 6, 3, 2]

// 5. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
//     a) визначити і вивести в консоль площу трикутника 
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. 
// Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).
// const a = Number(prompt('Enter side'));
// const b = Number(prompt('Enter side'));
// const c = Number(prompt('Enter side'));
// //5, 4, 3
// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     console.log('Incorect data');
// } else {
//     let pifagor = false;
//     if (b < c && a < c) {
//         pifagor = c ** 2 === a ** 2 + b ** 2;
//     } else if (c < b && a < b) {
//         pifagor = b ** 2 === c ** 2 + a ** 2;
//     } else if (c < a && b < a) {
//         pifagor = a ** 2 === c ** 2 + b ** 2;
//     }
//     if (pifagor) {
//         console.log('трикутник є прямокутним');
//     } else {
//         console.log('трикутник не є прямокутним');
//     }
//     // площу трикутника
//     let r = a + b + c;
//     let s = parseFloat((a * b * c) / (4 * r)).toFixed(3);
//     if (s % 1 != 0) {
//         console.log(s);
//     } else { console.log(parseInt(s)) };
// };

// 6. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання.
// Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
//     В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
//     В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
//     В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
//     В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
// let currentTimeDate = new Date();
// let hours = currentTimeDate.getHours();
// if (hours > 23 && hours < 5) {
//     console.log('Доброї ночі');
// } else if (hours >= 5 && hours <= 11) {
//     console.log('Доброго ранку');
// } else if (hours >= 11 && hours <= 17) {
//     console.log('Доброго дня');
// } else if (hours >= 17 && hours <= 23) {
//     console.log('Доброго вечора');
// } else {
//     console.log('Error');
// };