// Напишите функцию intersection(arr1, arr2). Она должна принимать
// на вход два массива целых чисел. Функция должна вернуть новый
// массив чисел, содержащихся в обоих исходных массивах.

function task11(array1, array2) {
    let newArray = [];
    function checkArray1(symbol) {
        for (let a = 0; a < array1.length; a++) {
            if (symbol === array1[a]) {
                return 1
            }
        }
        return 0
    }
    function checkArray2(symbol) {
        for (let b = 0; b < array2.length; b++) {
            if (symbol === array2[b]) {
                return 1
            }
        }
        return 0
    }
    for (let c = 0; c < array1.length; c++) {
        if (checkArray1(array1[c]) === 1 && checkArray2(array1[c]) === 1) {
            newArray.push(array1[c]);
        }
    }
    return newArray;
}

console.log(task11([1, 2, 4], [1, 5, 6, 2, 5, 7]));
