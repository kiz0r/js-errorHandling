// Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію значень, що передаються, і генерацію помилок відповідних типів.
// Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.

const recPow = function (base, exponent) {
  return exponent === 0 ? 1 : base * recPow(base, exponent - 1);
};

function myPow(base, value) {
  if (typeof value !== 'number' || typeof base !== 'number') {
    throw new TypeError('All meanings should be a number.');
  } else if (
    value <= 0 ||
    !Number.isSafeInteger(value) ||
    !Number.isSafeInteger(base)
  ) {
    throw new RangeError(
      'Value must be greater than 0 and all meanings should be an integer value.'
    );
  } else {
    return recPow(base, value);
  }
}

try {
  const validatedPower = myPow(3, 7);
  console.log('Result = ' + validatedPower);
} catch (error) {
  if (error instanceof TypeError) {
    console.log('error : ', error);
  } else if (error instanceof RangeError) {
    console.log('error : ', error);
  } else {
    console.log('something went wrong...');
  }
}
