// 12 NODE.JS INTRODUCTION


// 1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
// Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної 
// системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path)



// const http = require('http');
// const os = require('os');
// const path = require('path');

// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type': 'text/html'});

//     response.write('<h2>System information</h2>');
//     response.write('Current user name: ' + os.userInfo().username);
//     response.write('<br>');
//     response.write('OS type: ' + os.type());
//     response.write('<br>');
//     response.write('System work time: ' + (os.uptime()/60).toFixed(2) + ' minutes');
//     response.write('<br>');
//     response.write('current work directory: ' + path.dirname(__filename));
//     response.write('<br>');
//     response.write('Server file name: ' + path.basename(__filename));
// }).listen(4000);

// console.log('Server running at http://127.0.0.1:4000/ ...');



// 2. Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним 
// часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна 
// використати об’єкт module.exports. 
// Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:


// const http = require('http');
// const greeting = require('./personalmodule');
// const os = require('os');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     let userName = os.userInfo().username;
//     res.write(greeting.showMessage(userName));
//     res.end();
// }).listen(8000);

// //Console will print the message
// console.log('Server running at http://127.0.0.1:3000/');




// ⭐⭐⭐
// Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, а потім зчитує
//  цей файл та виводить вміст на екран.
// Кроки:
// Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація.
// Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл.
// Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати
//  отриману інформацію функції writeToTextFile().
// Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
// Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу.*




// const http = require('http');
// const fs = require('fs');

// const filePath = 'info.txt';

// //function for writing information in file
// function writeToTextFile(data) {
//     fs.writeFile(filePath, data, (err) => {
//         if (err) {
//             console.log("Error in writing to file: ", err);
//         } else {
//             console.log('Information is successfully written to file.');
//         }
//     });
// }

// //Create server that listens to request
// const server = http.createServer((req, res) => {
//     //Checking if request is done by using method "GET"
//     if (req.method === 'GET') {
//         const userInput = req.url.slice(1); //get information from address line(without first slash)
//         //Inputing received information in file
//         writeToTextFile(userInput);
//         //Reading  data from file
//         fs.readFile(filePath, 'utf8', (err, data) => {
//             if (err) {
//                 console.log('Error in reading file:', err);
//                 res.statusCode = 500;
//                 res.end('Server error');
//             } else {
//                 //send file content as response onrequest
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'text/plain');
//                 console.log(data);
//                 res.end(data);
//             }
//         });
//     } else {
//         res.statusCode = 400;
//         res.end('Wrong request method');
//     }
// });

// //Start server
// server.listen(3000, () => {
//     console.log('Server running at port 3000');
// });