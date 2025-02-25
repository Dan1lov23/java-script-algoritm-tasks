// Напишите функцию decimalToBinary(digit), которая принимает на вход десятичное число digit
// и возвращает его же в двоичном представлении.
// Возвращаемое значение должно быть строкой.
// Если на вход подается некорректное значение, функция должна вернуть пустую строку.

function task19(number) {
    let result = "";
    while (number > 1) {
        result += String((number % 2) | 0);
        number = number / 2;
    }
    return(result.split('').reverse().join(''));
}

console.log(task19(1000));
