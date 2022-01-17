//Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр 
//  - число. Функция создает столько <div>, сколько указано в amount 
//  и добавляет их в div#boxes.
//  Размеры самого первого <div> - 30px на 30px.
//  Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//  Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// select all HTML elements 
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input')

// counter
let count = 0;

// add listener on HTML elements
input.addEventListener('change', (event) => count = event.currentTarget.value);
createBtn.addEventListener('click', () => createBoxes(count));
destroyBtn.addEventListener('click', destroyBoxes);

//declare and perform functions
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Стало 
function createBoxes(amount) {
  const divCollection = [];
  let parameter = 30;
  for (let i = 0; i < amount; i+=1) {  
    divCollection.push(`<div style="width: ${parameter += 10*i}px; height: ${parameter}px; background-color: ${getRandomHexColor()}"></div>`);
  }
  const div = document.querySelector('#boxes');
  div.innerHTML = divCollection.join('');
}

// Було
// function createBoxes(amount) {
//   //  const divCollection = new Array(amount).fill('0'); 
//   const divCollection = [];
//   for (let i=0; i<amount; i++ ) {
//     divCollection.push('');
//   }
//   const markup = divCollection.
//       map((item,index) => { 
//         const parameter = 30 + index*10;
//         return `<div style="width: ${parameter}px; height: ${parameter}px; background-color: ${getRandomHexColor()}"></div>`   
//         }
//       ).join('');
//   const div = document.querySelector('#boxes');
//   div.innerHTML = markup;
// }

//Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.
function destroyBoxes() {
  const div = document.querySelector('#boxes');
  div.innerHTML ='';
}
