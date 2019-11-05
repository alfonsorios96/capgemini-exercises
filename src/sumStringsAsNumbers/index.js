const HYPHEN = "-";

const decomposeNumberString = numberObj => {
  numberObj.number = numberObj.number.split("").reverse();

  return numberObj;
};

const sortNumberStrings = decomposedNumbers =>
  // TODO. Try ({length: a}, {length: b}) => b - a;
  decomposedNumbers.sort((a, b) => b.number.length - a.number.length);

const sumCarry = (result, i, amount) => {
  if (result[i] !== undefined) result[i] += amount;
      else result.push(amount);
};

const doBinarySum = (result, number) => {
  for (let i = 0; i < number.length; i++) {
    sumCarry(result, i, number[i]);

    if (result[i] >= 10) {
      result[i] -= 10;
      result[i + 1]++;

      sumCarry(result, i + 1, 1);
    }
  }
};

const parseDigits = decomposedNumber => {
  for (let i = 0; i < decomposedNumber.number.length; i++) {
    decomposedNumber.number[i] = parseInt(decomposedNumber.number[i]);

    if (!decomposedNumber.sign) {
      decomposedNumber.number[i] *= -1;
    }
  }
};

const something = (decomposedNumbers, objPosition) => {
  const result = [];

  parseDigits(decomposedNumbers[objPosition]);

  for (const decomposedNumber of decomposedNumbers) {
    doBinarySum(result, decomposedNumbers.number);
  }
};

const getArrayResult = decomposedNumbers => {
  for (const objPosition in decomposedNumbers) {
    something(decomposedNumbers, objPosition);
  }
};

const formNumberObject = numberString => {
  const isNumberPositive = !numberString.includes(HYPHEN);
  numberString = numberString.replace(HYPHEN, "");

  return {
    number: numberString,
    sign: isNumberPositive
  };
};

const sum = (...numberStrings) => {
  numberStrings = numberStrings.map(formNumberObject);
  numberStrings = sortNumberStrings(numberStrings);
  const decomposedNumbers = numberStrings.map(decomposeNumberString);

  getArrayResult(decomposedNumbers);
};

module.exports = sum;
