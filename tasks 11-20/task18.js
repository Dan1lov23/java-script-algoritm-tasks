// Реализуйте функцию scramble(str1, str2),  которая принимает две строки и возвращает true,
// если символы первой строки str1 могут быть переставлены так, чтобы получить вторую строку str2,
// иначе возвращает false

function task18(str1, str2) {
    function check(symbol) {
        for (let a = 0; a < str2.length; ++a) {
            if (symbol === str2[a]) {
                return 1;
            }
        }
        return 0;
    }
    let counter = 0
    for (let a = 0; a <= str1.length; ++a) {
        if (check[str1[a]] === 1) {
            counter++;
        }
    }
    if (counter === str2.length) {
        return 1;
    } else {
        return 0;
    }
}

console.log(task18('rer', 'err'));
