// REGULAR EXPRESSIONS. MEMORY MANAGEMENT. 



// 1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
// Приклад роботи:
// upperCase('regexp'); 
// // "String's not starts with uppercase character"
// upperCase('RegExp');
// // "String's starts with uppercase character"

// function upperCase(str) {
//     regExp = /^[A-Z]/;
//     if (regExp.test(str)) {
//         console.log('String starts with upper case character');
//     } else { console.log('String starts with lower case character'); }
// }
// upperCase('regexp'); // "String starts with lower case character"
// upperCase('RegExp');// "String starts with uppercase character"



// 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
//  Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

// function checkEmail(data){
//     const regExp = /\S+@\S+\.\S+/;
//     console.log(regExp.test(data));
// }
// checkEmail("Qmail2@gmail.com");// true




// 3. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок: "Java Script"
// Вихід: “Script, Java”

// const re = /(\w+)\s(\w+)/;
// const str = 'Java Script';
// const newStr = str.replace(re, '$2, $1');
// console.log(newStr);


// 4. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

// function checkBankCard(str) {
//     const regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     const result = regExp.test(str);
//     if (result) {
//         console.log('Validation is sucessful');
//     } else {
//         console.log('Please, try again. Incorect data input!');
//     }
// }
// checkBankCard('2323-2323-2323-2323');
// checkBankCard('232f-2323-2323-2323');
// checkBankCard('232f-2323-2323-23237');



// 5. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
//  •  Цифри (0-9).
//  •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
//  •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.

//  •  Символ “-” не може повторюватися.
// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"

// function checkEmail(str) {
//     const mailPattern = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
//     if (mailPattern.test(str)) {
//         console.log('Emil is correct');
//     } else { console.log('Email is not corect') };
// }
// checkEmail('my_mail@gmail.com'); //"Email is correct!"
// checkEmail('#my_mail@gmail.com'); //"Email is not correct!"
// checkEmail('my_ma--il@gmail.com'); //"Email is not correct!"




// 6. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// //1.1, 3

// function checkLogin(data){
//     const re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
//     const regNumber = /[0-9\.]+/g;
//     const resultNumber = data.match(regNumber);
//     const result = re.test(data);
//     console.log(`${data} is ${result} - ${resultNumber}`);
// }
// checkLogin('ee1*1ret3'); // false 1, 1, 3
// checkLogin('ee1.1ret3'); // true 1.1, 3
// checkLogin('ee1*1ret3'); // false  1, 1, 3



// ⭐⭐⭐
// Додайте перевірку на кожне поле даних в формі
// https://codepen.io/misha_klymenko/pen/rNZKodW?editors=1000 
