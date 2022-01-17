// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, 
//  указывается в его атрибуте data-length.
// Если введено подходящее количество символов, 
//  то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, 
//которые мы уже добавили в исходные файлы задания.

const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', validationInputListener);

function validationInputListener (event) {
    // verification condition have been changed
    // valid style applies only on value 6
    if (event.currentTarget.value.length !== +validationInput.dataset.length) {
        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid');
        }
        validationInput.classList.add('invalid');
    } else {
        if (validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid');
        }
        validationInput.classList.add('valid');
    }
}