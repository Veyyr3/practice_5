// === 1 Задание ===
// пользователи
let users = [
    { login: "admin", password: "password123", name: "Администратор" },
    { login: "alex", password: "123456password", name: "Алексей" },
    { login: "maga", password: "magasuper1", name: "Магомед" },
    { login: "ivan", password: "qwerty1234", name: "Иван" },
    { login: "anna", password: "annapassword", name: "Анна" }
]

// логин и пароль по айди получаю
let login = document.getElementById("login")
let password = document.getElementById("password")

// функция авторизации
function authorization() {
    // получаем логин и пароль
    let userLogin = login.value
    let userPassword = password.value

    // ищу пользователя по методу find. Этот метод требует в себя колбэк, 
    // поэтому я написал стрелочную функцию, которая сверяет логин и пароль из массива пользователей
    let foundUser = users.find(user => user.login === userLogin && user.password === userPassword)

    // Когда пользователя нашли, то пишем сообщения
    if (foundUser) {
        alert(`Добро пожаловать на сайт, ${foundUser.name}`)
    } else { // если не нашли, приносим извинения
        alert(`Просим прощения, но вас не существует на сайте. Попробуйте еще раз или зарегистрируйтесь.`)
    }
}

// === 2 Задание ===

// функция, которая считает сумму всех переданных параметров (только числа)
function sumAll(...numbers) {
    let total = 0; // переменная, которая считает кол-во параметров
    for (let num of numbers) { // лаконичная запись перебора всего массива вместо let i = 0; i < numbers.length; i++
        total += num;
    }
    return total; // возвращаем количество
}

alert("Сумма всех чисел: " + sumAll(2, 5, 6, 7)); 