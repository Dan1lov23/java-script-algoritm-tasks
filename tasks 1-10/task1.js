// Дано натуральное число number.
//
// Нужно написать функцию sumDigits(number), которая будет считывать все цифры числа number
//
// и возвращать их сумму.
//
// Возвращаемое значение должно быть числом.

function task1(number) {
    let newNumber = number.split("");
    let sum = 0;
    for (let i = 0; i <= newNumber.length - 1; i++) {
        let num = Number(newNumber[i]);
        sum += num;
    }
    return sum;
}

console.log(task1('12345'));
