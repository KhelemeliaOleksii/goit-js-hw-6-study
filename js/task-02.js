
    // Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
    // Добавит название ингредиента как его текстовое содержимое.
    // Добавит элементу класс item.
    // После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// function create a li-element
//    income: string name
//    outcome: a li-element with:
                  // textContent = name
                  // class='item' 
const createItem = function (name) {
  const element = document.createElement('li');
  element.textContent = name;
  element.classList.add('item');
  return element;
}

const itemListCreate = ingredients.map(createItem);
const list = document.querySelector("#ingredients");
list.append(...itemListCreate);  
//console.log(list);