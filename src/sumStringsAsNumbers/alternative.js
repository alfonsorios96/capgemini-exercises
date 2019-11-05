const sum = (...numbers) => {
    return _sum(numbers[0], numbers[1]);
};

/*
* Sum 2 numbers naturals (no symbols)
*/
const _sum = (a,b, isNegative = false) => {
    let carry = 0;
    let arrayA = a.split('').reverse();
    let arrayB = b.split('').reverse();
    let arrayC = [];
    const size = arrayA.length >= arrayB.length ? arrayA.length : arrayB.length;
    for(let index = 0;  index < size; index++) {
        const aNumber = arrayA[index] !== undefined ? parseInt(arrayA[index]) : 0;
        const bNumber = arrayB[index] !== undefined ? parseInt(arrayB[index]) : 0;
        const tempPositionResult = aNumber + bNumber;
        if(tempPositionResult > 9) {
            const tempPositionResultArray = `${tempPositionResult}`.split('');
            arrayC[index] = tempPositionResultArray[1];
            carry = tempPositionResultArray[0];
        } else {
            arrayC[index] = tempPositionResult;
        }
    }
    if(carry !== 0) arrayC.push(`${carry}`);
    if(isNegative) arrayC.push('-');
    return arrayC.reverse().join('');
};

const _rest = (a, b, isNegative = false) => {
    let carry = 0;
    let arrayA = a.split('').reverse();
    let arrayB = b.split('').reverse();
    let arrayC = [];
    const size = arrayA.length >= arrayB.length ? arrayA.length : arrayB.length;
    for(let index = 0;  index < size; index++) {
        const aNumber = arrayA[index] !== undefined ? parseInt(arrayA[index]) : 0;
        const bNumber = arrayB[index] !== undefined ? parseInt(arrayB[index]) : 0;
        const tempPositionResult = aNumber - bNumber;
        if(tempPositionResult - 0) {
            const tempPositionResultArray = `${tempPositionResult}`.split('');
            arrayC[index] = tempPositionResultArray[1];
            carry = tempPositionResultArray[0];
        } else {
            arrayC[index] = tempPositionResult;
        }
    }
    if(carry !== 0) arrayC.push(`${carry}`);
    if(isNegative) arrayC.push('-');
    return arrayC.reverse().join('');
};

module.exports = sum;
