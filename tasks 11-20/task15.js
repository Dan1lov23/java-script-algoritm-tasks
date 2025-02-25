// Задан массив, содержащий целые числа и имеющий длину не менее 3.
// Массив либо полностью состоит из нечетных чисел, либо полностью состоит из четных чисел,
// за исключением одного целого числа N.
// Напишите функцию findOutlier(integers), который принимает массив в качестве аргумента и возвращает N.

function task15(array) {
    let even = 0;
    let evenCounter = 0;
    let noEven = 0;
    let notEvenCounter = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 === 0) {
            evenCounter++;
            even = array[i];
        } else {
            notEvenCounter++;
            noEven = array[i];
        }
    }
    if (evenCounter > notEvenCounter) {
        return noEven;
    } else {
        return even;
    }
}

console.log(task15([160, 3, 1719, 19, 11, 13, -21]));
