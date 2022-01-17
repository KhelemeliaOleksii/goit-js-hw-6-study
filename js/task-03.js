// Напиши скрипт для создания галереи изображений по массиву данных. 
//  В HTML есть список ul.gallery.
// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img>
// вложенных в <li>. Для создания разметки используй 
// шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну
//  операцию вставки.
// Добавь минимальное оформление галереи 
//  флексбоксами или гридами через CSS классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallary = document.querySelector(".gallery");
//console.log(gallaryImgs);
const listItemsImages = images
  .map((item) => 
  `<li class='gallery-item' > <img src="${item.url}" alt="${item.alt}" width="100%" height="100%" style="display:block;"></li>\n`).join("");
//console.log(listItemsImages);
gallary.insertAdjacentHTML('beforeend', listItemsImages);

// gallary: add css styles
gallary.style.display = "flex";
gallary.style.flexWrap = "wrap";
gallary.style.flexDirection = "row";
gallary.style.justifyContent = "space-between";

// galaryItems: add css styles
const gallaryItems = document.querySelectorAll('.gallery-item');
gallaryItems.forEach((item) => {
   item.style.flexBasis = "calc((100% / 3) - (100% / 30)) ";
   item.style.listStyleType = "none"; 
   item.style.objectFit = "cover"; 
});
