// 11. ASYNCHRONOUS JS

// 1. Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і цілочисельне 
// значення затримки delay (в мс) і повертає Promise, який чекає задану кількість часу (використовуючи аргумент delay)
//  і завершується повідомленням message.
// Приклад застосування функції:

// getPromise("test promise", 2000).then(function (data) {
//     console.log(data);
// });
// Результат: через 2 сек в консолі виводиться "test promise"

// function getPromise(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             resolve(message);
//         }, delay);
//     });
// };
// getPromise("test promise", 2000).then(function (data) {
//     console.log(data);
// });




// 2. Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise,
//  робота якого завершується поверненням добутку елементів масиву, якщо вони є типу Numbers,
//   або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.
// Приклад застосування функції:
// calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
// calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"

// function calcArrProduct(arr) {
//     return new Promise(function (resolve, reject) {
//         let res = 1;
//         for (let i = 0; i < arr.length; i++) {
//             if (typeof arr[i] === 'number') {
//                 res *= arr[i];
//             }
//             else {
//                 reject("Error! Incorrect array!");
//             }
//         }
//         resolve(res);
//     });
// }
// calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
// calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));// "Error! Incorrect array!"


// 3. Створіть наступний асинхронний ланцюжок promise:
// new Promise(function (resolve, reject) {
//    // Запитуємо у користувача number за допомогою prompt()
//    // Якщо користувач ввів не число - викликаємо reject()
//    // Якщо користувач ввів число- викликаємо resolve(number)
// }).catch(function (error) {
//    return new Promise(function (resolve, reject) {
//       // Запитуємо у користувача number, до тих пір, поки він його не введе
//       // Після вводу числа - викликаємо resolve(number)
//    });
// }).then(function (result) {
//    // Вивід number у консоль
// });



// new Promise(function (resolve, reject) {
//     let number = prompt('Please enter number.');
//     if (isNaN(number)) {
//         reject('Error Input');
//     } else {
//         resolve(number);
//     }
// }).catch(function (error) {
//     console.log(error);
//     return new Promise(function (resolve, reject) {
//         let number;
//         function ifNumber() {
//             number = prompt('Emter your number');
//             if (isNaN(number)) {
//                 ifNumber();
//             } else {
//                 resolve(number);
//             }
//         }
//         ifNumber();
//     });
// }).then(function (result) {
//     console.log(result);
// });
// console.log('done');


// 4. Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд).
//  Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10. 
//  Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, то одиниця повинна дочекатися виведення нуля 
//  і тільки потім почати свій відлік (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс, який резолвиться 
// поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд.
// Приклад  роботи:
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// function showNumbers() {
//         // your code with using delay(i, time)
// }
// showNumbers();
// Результат: 
// з різним рендомним інтервалом (наприклад від 0 до 3 сек) в консоль послідовно 
//  виводяться числа 0,1,2,3,4,5,6,7,8,9 Задачу потрібно реалізувати без застосування промісів.
//  Переписати функцію showNumbers, використовуючи конструкцію async/await.




//з застосування промісів 
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// function showNumbers() {
//     for (let i = 0, p = Promise.resolve(); i <= 10; i++) {
//         const time = Math.floor(Math.random() * 5) * 1000; //delay 1-5 sec
//         p = p.then(() =>
//             delay(i, time).then((result) => {
//                 console.log(`result = ${result}, delay = ${time / 1000}sec`);
//             })
//         )
//     }
// }
// showNumbers();



//без застосування промісів 
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// async function showNumbers() {
//     for (let i = 0; i <= 10; i++) {
//         await delay(i, Math.random() * 2000);
//         console.log(i);
//     }
// }
// showNumbers();