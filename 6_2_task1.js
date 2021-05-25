// Задание 1.

// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
// Дан массив.Нужно вывести в консоль количество чётных и нечётных элементов в массиве.Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис

function printNumEvenOddElements() {
  let array = [23, '678dd', undefined, 34, 1, NaN, 90, 47, 0, 95, 'ff', 14, -658, -3, 0, null];
  let isNane, currVal, numEven = 0, numOdd = 0, numZero = 0;

  console.log('Массив: ', array);


  for (let i = 0; i < array.length; i++) {
    currVal = array[i];
    isNane = isNaN(currVal);
    if ((typeof currVal === 'number') && (isNane !== true)) {
      if (currVal === 0) numZero++;
      else {
        if (currVal % 2 === 0) numEven++;
        else numOdd++;
      }
    }
  }

  console.log('Количество чётных элементов: ', numEven);
  console.log('Количество нечётных элементов: ', numOdd);
  console.log('Количество нулей: ', numZero);
}

printNumEvenOddElements();