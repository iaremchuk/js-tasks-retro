// 3. LOOPS. FUNCTIONS

// 1. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
// - початкове значення
// - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із
//      числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

// function createArray(start, end) {
//     const arr = [];
//     for (let i = start; i <= end; i++) {
//         arr.push(i);
//     };
//     return arr;
// };
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9];

// 2. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при 
// цьому a виводится 1 раз, число а+1 - два рази і т.д.
// // 1,2,2,3,3,3...

// function getNumbers(a, b){
//     let arr = [];
//     for(let i = a; i<=b; i++){
//         for(let j = a; j<=i; j++){
//             arr.push(i);
//         };
//     };
//     console.log(arr.join(','));
// };
// getNumbers(2,5);

// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими 
// числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]
// function randArray(k){
//     const arr = [];
//     for(let i = 0; i < k; i++){
//         arr[i] = Math.floor(Math.random()*500) + 1; //+1 because from 1 to 500 and if we get 0 in random we add 1 to make it 1
//     };
//     console.log(arr);
// };
// randArray(5);

// 4. Написати функцію compact() яка має приймати на вхід масив, а на вихід має
//  повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

// function compact(arr){
//     return [... new Set(arr)];
// };
// const arr = [5, 3, 4, 5, 6, 7, 3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

// 5. Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу 
// даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 

*/
// function funcSortArrByType(arr){
//     const newArr = [...arr].flat();
//     const numArr = newArr.filter(elem =>{
//         return typeof elem === 'number';
//     });
//     const strArr = newArr.filter(elem => {
//         return typeof elem === 'string';
//     });
//     return [numArr, strArr];
// }
// let  arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
// let arrNew = funcSortArrByType(arr);
// console.log(arrNew);


// 6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та 
// повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення,
//  інші значення – додавання.
// calc(10, 3, 1); // => 7

// function calc(a, b, op){
//     switch (op) {
//         case 1:
//             return a - b;
//             break;
//         case 2:
//             return a * b;
//             break;
//         case 3:
//             return a / b;
//             break;
//         default:
//             return a + b;
//             break;
//     };
// };
// console.log(calc(10, 3, 1)); // => 7

// 7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// function findUnique(arr){
//     return arr.length === [...new Set(arr)].length;
// };
// const arr1 = findUnique([1, 2, 3, 5, 3]);  // => false
// const arr2 = findUnique([1, 2, 3, 5, 11]); // => true
// console.log(arr1);
// console.log(arr2);

// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну 
// функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції. 
//  (потребує використання closure)
// const tom = create("pass_for_Tom");
// tom("pass_for_Tom"); //повертає true 
// tom("pass_for_tom"); //повертає false

// function create(arg1) {
//     return function (arg2) {
//         return arg1 === arg2;
//     };
// };
// const tom = create("pass_for_Tom");
// console.log(tom("pass_for_Tom")); //повертає true 
// console.log(tom("pass_for_tom")); //повертає false