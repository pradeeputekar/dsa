// fimd factorial of given number

const getFactorial = num => {
    let result = 1;
    if (num <= 1) {
        return result;
    }
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

console.log(getFactorial(3));
