// Напишите функцию hasCharsInOrder(str, name), которая принимает две строки в качестве параметров и проверяет,
// содержит ли первая строка все буквы из второй строки в правильном порядке.
// Функция должна возвращать значение true, если условие задачи выполняется, в противном случае false.
// При сравнении букв регистр не должен учитываться.

function hasCharsInOrder(string, name) {
    string = string.toLowerCase();
    name = name.toLowerCase();

    let checkIndex = 0;

    for (let i = 0; i < name.length; i++) {
        checkIndex = string.indexOf(name[i], checkIndex);
        if (checkIndex === -1) {
            return false;
        }
        checkIndex++;
    }

    return true;
}

console.log(hasCharsInOrder('По ту сторону рек', 'тону'));