//Задание 1

let password = 'пароль';
let ask = prompt ('Введите пароль');

if (ask = password) {
    console.log('Пароль введен верно');
 } else {
    console.log('Пароль введен неправильно')
 }
 

//задание 2

let c = 5

if (c > 0 && c < 10 ) {
	console.log ('Верно');
} else {
	console.log('Неверно');
}

//задание 3

let d = 50;
let e = 200;
if (d > 100 || e > 100) {
    console.log ('Верно')
} else {
    console.log ('Неверно')
}


//задание 4

let a = '2';
let b = '3';

alert(number(a) + number(b));

//задание 5

let monthNumber = Number(prompt ('введите номер месяца')) ;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
            console.log('лето');
            break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log ('ввели что-то не так')
        break;
}