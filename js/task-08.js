// Напиши скрипт управления формой логина.
    // Обработка отправки формы form.login-form должна быть по событию submit.

    // При отправке формы страница не должна перезагружаться.

    // Если в форме есть незаполненные поля, выводи alert с предупреждением
    //   о том, что все поля должны быть заполнены.

    // Если пользователь заполнил все поля и отправил форму, собери значения
    //   полей в обьект, где имя поля будет именем свойства, а значение поля
    //   - значением свойства. Для доступа к элементам формы 
    //  используй свойство elements.

    // Выведи обьект с введенными данными в консоль 
    //  и очисти значения полей формы методом reset.

//const loginForm = document.querySelector('.login-form');

const form = document.querySelector('.login-form');

const formHandler = (event) => {
    event.preventDefault();
    if (event.currentTarget['0'].value.length === 0) {
        alert(`${event.currentTarget['0'].name} is empty. Input value`);
        return;
    }
    if (event.currentTarget['1'].value.length === 0) {
        alert(`${event.currentTarget['1'].name} is empty. Input value`);
        return;
    }
    const {
        elements:{email, password}
    } = event.currentTarget;
    console.log(email.value, password.value);
    event.currentTarget.reset();
}

form.addEventListener('submit', formHandler);