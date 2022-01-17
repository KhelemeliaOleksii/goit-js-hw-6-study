// Напиши скрипт, который реагирует на изменение 
//  значения input#font-size-control (событие input) 
//  и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//  В результате при перетаскивании ползунка будет меняться размер текста.

const sizeControlInput = document.querySelector('#font-size-control');
const modifiedText = document.querySelector('#text');

// start value have been added
modifiedText.style.fontSize = sizeControlInput.value + 'px';

sizeControlInput.addEventListener('input', sizeControlInputListener);

function sizeControlInputListener (event) {
    modifiedText.style.fontSize = event.currentTarget.value + 'px';
}

