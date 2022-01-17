// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
    // Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
    // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
    // Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

incrementBtn.addEventListener('click', incrementBtnListener);
decrementBtn.addEventListener('click', decrementBtnListener);

function incrementBtnListener () {
    const counterDiv = document.querySelector('#value');
    counterValue += 1;
    counterDiv.textContent = counterValue;
}
function decrementBtnListener () {
    const counterDiv = document.querySelector('#value');
    counterValue -= 1;
    counterDiv.textContent = counterValue;
}
