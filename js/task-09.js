//Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change-color 
// и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');

btn.addEventListener('click', btnListener);

function btnListener () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  const text = document.querySelector('.color');
  text.textContent = color;
}
