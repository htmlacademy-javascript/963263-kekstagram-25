function getRandomInteger (firstNumber, lastNumber) {
  if (firstNumber <= lastNumber) {
    firstNumber = Math.ceil(firstNumber);
    lastNumber = Math.floor(lastNumber);
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1) + firstNumber);
  } else {
    const actualFirstNumber = Math.ceil(lastNumber);
    const actualLastNumber = Math.floor(firstNumber);
    return Math.floor(Math.random() * (actualLastNumber - actualFirstNumber + 1) + actualFirstNumber);
  }
}
// ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}
checkStringLength('Привет, как дела', 120);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement, getRandomInteger};
