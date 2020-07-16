//Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
let number = prompt('введи число');

function takeNumber(number) {
    if (number === 0 || number === 1) {
        return 'Число не простое';
    } else if (number === 2) {
        return 'Число простое';
    } else {
        for (let i = 2; i < number; i++) {
            if (number === i + 1) {
                return 'Число простое';
            } else if (number % i === 0) {
                return 'Число не простое;
            }
        }
    } else if (number > 1000) {
        return 'Данные не верны';
    }
    return result;
}
console.log(takeNumber(number))