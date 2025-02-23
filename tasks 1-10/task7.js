// Реализуйте функцию divide(str),
// которая принимает строку и разделяет её на пары из двух символов.
// Если строка содержит нечетное количество символов,
// то к последней паре следует добавить символ _ для четности.

function task7(string) {
    let array = [];
    let page = "";
    for (let i = 0; i < string.length; i += 2) {
        if (string[i + 1] === undefined) {
            array.push((string[i] + "_"));
            break;
        }
        console.log(string[i + 1]);
        page = string[i] + string[i + 1];
        array.push(page);
    }
    return array;
}

console.log(task7('kitik'));
