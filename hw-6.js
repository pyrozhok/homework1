// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор,
//  пока не встретит значение 10. После вывода значения 10 в консоль 
//  цикл должен прекратить свою работу.

const number= [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
    if (number[i] === 10) {
        console.log(number[i]);
        break; 
    }
    console.log(number[i]);
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3]
// Найдите индекс значения 4 в этом массиве.