// Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію значень, що передаються, і генерацію помилок відповідних типів.
// Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.

const myPow = function (base, exponent) {
  return exponent === 1 ? base : base * myPow(base, exponent - 1);
};

function validatePower(value) {
  if (typeof value !== 'number') {
    throw new TypeError('Value should be a number.');
  } else if (value <= 0 || !Number.isSafeInteger(value)) {
    throw new RangeError(
      'Value must be greater than 0 and it should be an integer value.'
    );
  } else {
    return value;
  }
}

try {
  const validatedPower = validatePower(3);
  console.log('Result = ' + myPow(2, validatedPower));
} catch (error) {
  if (error instanceof TypeError) {
    console.log('error : ', error);
  } else if (error instanceof RangeError) {
    console.log('error : ', error);
  } else {
    console.log('something went wrong...');
  }
}
