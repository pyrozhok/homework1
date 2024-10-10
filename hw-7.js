// Задание 1
// Преобразовать строку 'js' в верхний 
// регистр.

let str = 'js';
let newStr = str.toUpperCase();
console.log(newStr);

// Задание 2
// Создать функцию, которая принимает массив 
// строк и строку. Функция должна вернуть 
// новый массив, содержащий только те элементы 
// первого массива, которые начинаются со
//  второй строки. Регистр символов не влияет 
//  на результат.
// Используйте функции toLowerCase() и 
// startsWith() для сравнения начала строк.

function 

// Задание 3
// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.
// Используйте встроенные функции 
// Math.floor() 
// Math.ceil() 
// Math.round() для округления значений.

let number = (32.58884);
let floorNumber = Math.floor(number);
console.log(floorNumber);

let number = (32.58884);
let ceilNumber = Math.ceil(number);
console.log(ceilNumber);

let number = (32.58884);
let roundNumber = Math.round(number);
console.log(roundNumber);

// Задание 4
// Найти минимальное и максимальное значения из чисел
//  52, 53, 49, 77, 21, 32 и вывести их в консоль.
// Используйте функции 
// Math.min() и Math.max()
//  для нахождения минимального и максимального 
//  значений.

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
// Создать функцию, которая выводит в консоль случайное 
// число от 1 до 10.
// Используйте функции 
// Math.random() и Math.floor()
//  для генерации случайных чисел.

function random() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(random());

// Задание 6
// Написать функцию, которая принимает целое число и
//  возвращает массив случайных чисел от 0 до этого 
//  числа. Длина массива должна быть в два раза меньше
//   переданного числа.
// В JavaScript функция 
// Math.random() возвращает случайное число от 
// 0 (включительно) до 1 (не включая).



// Задание 7
// Создать функцию, которая принимает два целых числа и
//  возвращает случайное число в этом диапазоне.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(2,5));


// Задание 8
// Вывести в консоль текущую дату.

let currentDate = new Date();
console.log(currentDate.toLocaleDateString('ru-RU'));

// Задание 9
// Создать переменную currentDate, хранящую текущую дату.
//  Вывести дату, которая наступит через 73 дня после текущей.
// Переменная currentDate создана, дата через 73 дня вычислена и 
// выведена с использованием методов getDate() и setDate()

let currentDate = new Date();
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 73);

console.log("Дата через 73 дня: " + futureDate.toDateString());

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]
// Дату и время можно получить из объекта Date

function formatDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDay();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes =date.getMinutes();
    const seconds =date.getSeconds();

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatDate(now));