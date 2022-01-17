// Task 1 
// Part 1
// Посчитает и выведет в консоль количество категорий
// в ul#categories, то есть элементов li.item.

// 1.0
const itemCollection = document.querySelectorAll('ul .item'); // we've got a NodeList. forEach method is presented.
console.log(`Number of categories: ${itemCollection.length}`);

// // 2.o
//const list = document.querySelector('#categories');
    // // 2.1 we can use querySelectorAll by class "item"
    // const itemCollection = list.querySelectorAll('.item'); // we've got a NodeList. forEach method is presented.
    // console.log(itemCollection.length);

    // // 2.2. or search all child
    //// const itemCollection = list.children; // we've got a HTMLCollection. There is no forEach method in the HTMLCollection. 
                                            // We have to use classical loop or transforn the HTMLCollection to array 
    // const itemChildCount = list.childElementCount;
    // //console.log(itemCollection)
    // console.log(itemChildCount);

    //  // 2.3 or getElementsByClassName
    // const itemCollectionGEBCN = list.getElementsByClassName("item"); // we`ve got a HTMLCollection. There is no forEach method in the HTMLCollection. 
    //                                             // We have to use classical loop or transforn the HTMLCollection to array  
    // console.log(itemCollectionGEBCN.length);

//Part 2
//Для каждого элемента li.item в списке ul#categories, 
//найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
//и количество элементов в категории (всех вложенных в него <li>).
const taskFunction = function () {
    const title =  arguments[0].querySelector('h2');
    const descendantItem = arguments[0].querySelectorAll("li"); 
    console.log('');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${descendantItem.length}`);
}
itemCollection.forEach(taskFunction);
