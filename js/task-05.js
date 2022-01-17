// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const elementInput = document.querySelector('#name-input');
const elementSpan = document.querySelector('#name-output');
// default value of name have been added
const defaultValue = 'Anonymous';

elementInput.addEventListener('input', elementInputListener);

function elementInputListener (event) {
    // add default value if input area is empy 
    elementSpan.textContent = 
            event.currentTarget.value.length <= 0 ?  defaultValue : event.currentTarget.value;
}

