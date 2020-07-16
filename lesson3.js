//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

function sumFunction(numberOne) {
    return function (numberTwo) {
        return numberOne + numberTwo;
    }
}

console.log(sumFunction());