// Задание 2.
// Написать функцию, которая принимает на входе любое число(но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет.Если введено больше 1 000, то выводится сообщение, что данные неверны.Обратите внимание на числа 0 и 1.

function simpleCompositeNumber(value) {
  let i = 0, res = "", simple = 1;

  if ((value < 2) || (value > 1000)) return res = 'Данные неверны';


  for (i = 2; i < value; i++) {
    if (value % i === 0) { simple = 0; break; }
  }

  if (simple === 0) res = `Число ${value} является составным`;
  else res = `Число ${value} является простым`;

  return res;
}


console.log(simpleCompositeNumber(357));