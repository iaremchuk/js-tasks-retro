// BROWSER OBJECT MODEL (BOM). EVENTS



// 1. За допомогою методів об’єкта window створити:
//      1) нове вікно розміром 300х300 пікселів.
//      2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//      3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//      4) із затримкою 2 сек закрийте вікно.

// const newWindow = window.open('', '', 'width=300,height=300');//empty window
// setTimeout(function(){
//     newWindow.resizeTo(500,500);
// }, 2000);
// setTimeout(function(){
//     newWindow.moveTo(200,200);
// }, 4000);
// setTimeout(function(){
//     newWindow.close();
// }, 6000);



// 2. Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p> 
// <div>
//         <button . . . . . >Change style!</button>
// </div>
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір 
// шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

// function changeCss(){
//     text.style.color = 'orange';
//     text.style.fontSize = '20px';
//     text.style.fontFamily = 'Comic Sans MS';
// }//we can use just id name to get access to id (text in this cade);




// 3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//      1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//      2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//      3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//      4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//      Приклад – курсор наведений на лінку.
// https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png

// function setBackground (color){
//     document.body.style.background = color;
// }



// 4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть 
// видалятися всі елементи в будь-якому порядку.
// https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png

// myBtn.addEventListener('click', deleteColor);
// function deleteColor(){
//     let x = document.getElementById('nameSet');
//     x.remove(x.selectedIndex);//by using attribute selectedIndex
// }




// 5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші 
// виводитиме повідомлення "Mouse is not on me!".
// Приклад роботи:
// https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png 


// let x = document.getElementById('liveButton');
// x.addEventListener('mouseover', mouseOverFunction);
// x.addEventListener('click', mouseClickFunction);
// x.addEventListener('mouseout', mouseOutFunction);

// function mouseOverFunction(){
//     document.getElementById('myId').innerHTML += 'Mouse on me!<br>';
// }
// function mouseClickFunction(){
//     document.getElementById('myId').innerHTML += 'I was pressed!<br>';
// }
// function mouseOutFunction(){
//     document.getElementById('myId').innerHTML += 'Mouse is not on me!<br>';
// }



// 6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну 
// сторінку при її розтязі/стисканні відповідні значення.
// https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png

// function displayWindowSize(){
//     let w = window.innerWidth;
//     let h = window.innerHeight;
//     let size = 'Width: ' + w + ', ' + 'Height: ' + h ;
//     document.getElementById('result').innerHTML = size;
// }
// window.addEventListener('resize', displayWindowSize);



// 7. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. 
// Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому 
//  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>
// <select name="cities" id="cities"></select>
// <p></p>
// https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png


// const cityArr = {
//     'ger': ['Berlin', 'Hamburg', 'Dortmund', 'Frankfurt'],
//     'usa': ['New-York', 'Washington', 'Boston', 'Chikago'],
//     'ukr': ['Lviv', 'Kyiv', 'Odessa', 'Dnipro'],
// }

// let prime_select = document.getElementById('country');
// prime_select.addEventListener('change', createList);
// prime_select.addEventListener('change', toParagraph);

// let city_select = document.getElementById('cities');
// city_select.addEventListener('change', toParagraph);

// function createList() {
//     city_select.innerHTML = '';
//     let selected_country = prime_select.value;
//     for (let i = 0; i < cityArr[selected_country].length; i++) {
//         let new_option = document.createElement('option');
//         new_option.innerHTML = cityArr[selected_country][i];
//         city_select.appendChild(new_option);
//     }
// }

// let parag = document.querySelector('p');
// function toParagraph() {
//     parag.innerHTML = '';
//     parag.innerHTML = prime_select.options[prime_select.selectedIndex].text + ', '
//         + city_select.options[city_select.selectedIndex].text;
// }