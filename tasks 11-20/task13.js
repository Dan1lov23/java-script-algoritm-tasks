//  Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
//  и целое число num. Функция должна вернуть true, если в переданном массиве
//  есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
//  функция должна вернуть false.

function task13(arr, num) {
    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + arr[n] === num) {
                return 1;
            }
        }
    }
    return 0;
}

console.log(task13([1, 2, 3, 4, 5, 6, 7, 8, 9], 11));
