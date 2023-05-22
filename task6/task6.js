// 6. DOCUMENT OBJECT MODEL (DOM)


// 1. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно 
// послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

// let items = document.querySelectorAll('#list li');
// items = Array.from(items);//make it an arrary without nides, so all array methods can be used
// const itemsLength = items.length; //5
// for (let i = 0; i < itemsLength; i++) {
//     let currentItem;
//     if (i % 2 === 0) {
//         currentItem = items.shift() //choosing first element of the array
//     } else {
//         currentItem = items.pop(); // choosing last element of the array
//     };
//     alert(currentItem.textContent);
// }; 

// 2. Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
// const header = document.querySelector('h1');
// header.style = 'background-color: #99ee00';
// const myDiv = document.querySelectorAll('#myDiv p');
// const styleParams = ['font-weight: bold;', 'color: red;', 'text-decoration: underline;', 'font-style: italic;'];
// myDiv.forEach((item, index) => {
//     item.style = styleParams[index];
// });
// const myList = document.getElementById('myList');
// myList.style = 'display: flex; list-style: none;';



// 3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх 
// атрибутів.
// <body>
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// </body>
// document.body.innerHTML = ` <main class="mainClass check item">
// <div id="myDiv">
//     <p>First paragraph</p>
// </div>
// </main>`;

// 4. Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/Jjabvez
// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
// const inputForm = document.querySelectorAll('.arr');
// const btn = document.querySelector('.btn');
// const outBlock = document.querySelector('.out');
// btn.onclick = function (){
//     outBlock.innerHTML = " ";//remove everything that was there before
//     inputForm.forEach(element => {
//         outBlock.innerHTML += `${element.getAttribute('data-form')}: ${element.value}</br>`;
//     });
// };

// 5. Задача описана в блоці JS
// 1) вибрати всі теги із класом circle
// 2) перебрати кожен елемент, і вибрати його data-anim значення
// 3) вибране значення додати як клас за допомогою classList до цього елемента.
// 4) перевірити чи застосувались анімації
// https://codepen.io/misha_klymenko/pen/abzLvqo
// const circles = document.querySelectorAll('.circle');
// circles.forEach(circle => {
//     const animClass = circle.getAttribute('data-anim');
//     circle.classList.add(animClass);
// });

// 6. Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/dyjyeGO 
const colorBtnList = document.querySelectorAll('.color');
const shoesList = document.querySelectorAll('.shoe');
const bgList = document.querySelectorAll('.gradient');
const outPrice = document.querySelector('#outprice');
const sizeOptionList = document.querySelectorAll('.size-shoe');
const selectList = document.querySelector('.size-list');
const quantity = document.querySelector('.quantity');

quantity.value = 1;

let price = 170;
let quantityValue = 1;
let sizeValue = 1;

colorBtnList.forEach((btn) => {
    btn.addEventListener('click', changeCard);
});
selectList.addEventListener('input', changePriceGivenSize);
quantity.addEventListener('input', changePriceGivenQuantity);

function changeCard(event) {
    colorBtnList.forEach((btn) => {
        btn.classList.remove('active');
    })
    event.target.classList.add('active');
    shoesList.forEach((shoe) => {
        shoe.classList.remove('show');
        if (shoe.attributes.color.value === event.target.attributes.color.value) {
            shoe.classList.add('show');
        }
    })
    bgList.forEach((bg) => {
        bg.classList.remove('second');
        if (bg.attributes.color.value === event.target.attributes.color.value) {
            bg.classList.add('second');
        }
    })
    selectList.value = 1;
    sizeValue = 1;
    quantity.value = 1;
    quantityValue = 1;
    price = event.target.dataset.price;
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);

}

function changePriceGivenSize() {
    sizeValue = selectList.value;
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}

function changePriceGivenQuantity() {
    quantityValue = quantity.value;
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}