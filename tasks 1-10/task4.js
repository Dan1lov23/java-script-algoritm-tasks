// Реализуйте функцию moveZeros(arr), которая принимает массив и перемещает все нули в конец,
//
// сохраняя порядок расположения остальных элементов.
//
// Функция должна вернуть массив с нулями в конце.

function task4(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            newArray.push(array[i]);
        } else {
            newArray.unshift(array[i]);
        }
    }
    return newArray;
}

console.log(task4([1, 2, 0, 3, 0, 4, 0, 1488]));
