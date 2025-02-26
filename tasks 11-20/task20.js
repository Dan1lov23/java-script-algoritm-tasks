// Необходимо реализовать функцию rle(str), принимающую в аргументах строку,
// состоящую из букв и возвращающую новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// Функция должна быть чувствительна к регистру символов.
// Символ, повторяющийся один раз, в итоговой строке должен быть без цифры.

function task10(str) {
    let result = [];
    for (let a = 0; a < str.length; a++) {
        result.push(str[a]);
    }
    console.log(result);
    let checkArray = [];
    let check = 1;
    for (let b = 0; b < result.length; b++) {
        if (result[b] === result[b + 1]) {
            check++;
        } else {
            checkArray.push(check);
            check = 1;
        }
    }
    let main = "";
    let counter = 0;
    for (let c = 0; c < result.length; c++) {
        main += result[c];
        if (result[c] !== result[c + 1]) {
            main += checkArray[counter];
            counter++;
        }
    }
    let mainResult = "";
    for (let d = 0; d < main.length; d++) {
        if (main[d] !== "1") {
            mainResult += main[d];
        }
    }
    return mainResult;
}

console.log(task10("dssdffffaaaagf"));
