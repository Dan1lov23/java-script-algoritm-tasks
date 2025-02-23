// пишите функцию primes(n). Её единственный аргумент — целое число n.
// Функция должна возвращать массив простых чисел от 2 до n.

function task14(n) {
    let result = [];
    function check(num) {
        for (let i = 2; i <= num - 1; i++) {
            if (num % i === 0) {
                return 0;
            }
        }
        return 1;
    }
    for (let x = 2; x <= n; x++) {
        if (check(x) === 1) {
            result.push(x);
        }
    }
    return result;
}

console.log(task14(13));