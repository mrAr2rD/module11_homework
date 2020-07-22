//Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
// Используйте setInterval.
//Например, пользователь ввёл числа 5 и 15.
// Каждую секунду в консоль должно печататься число,
// начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

// function checkFunction(number1, number2) {
//     return setInterval(function (number1, number2) {
//         for (i = number1; i < number2 + 1; i++) {
//             console.log(i);
//         }
//     }, 1000, number1, number2);
// }

// console.log(checkFunction(5, 15))

// Функция не решает поставленную задачу, все числа выводятся в консоль сразу и вывод повторяется каждую секунду. Чтобы всё работало правильно, нужно выводить число каждую секунду и увеличивать значение на 1, а когда дойдёт очередь до последнего числа, использовать clearInterval, чтобы остановить таймер. Цикл в данном случае использовать не нужно. Вот верный вариант решения:

function logNumbers(begin, end) {
  let current = begin;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == end) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

logNumbers(5, 15);
