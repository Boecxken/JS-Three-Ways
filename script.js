function math(number1, number2) {
    const multiNumber1 = (number1 * number1);
    const multiNumber2 = (number2 * number2);
    const sum = multiNumber1 + multiNumber2;
    const multiplication = sum * sum;
    return multiplication;
}

console.log(math(2, 3));

const math2 = function (number1, number2) {
    const multiNumber1 = (number1 * number1);
    const multiNumber2 = (number2 * number2);
    const sum = multiNumber1 + multiNumber2;
    const multiplication = sum * sum;
    return multiplication;
};

console.log(math2(2, 3));

const math3 = (number1, number2) => {
    const multiNumber1 = (number1 * number1);
    const multiNumber2 = (number2 * number2);
    const sum = multiNumber1 + multiNumber2;
    const multiplication = sum * sum;
    return multiplication;
};

console.log(math3(2, 3));