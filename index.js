
// return true if given number is palindrome

const palindromeNumber = num => {
    let originalNum = num;
    let newNum = 0;
    while (num > 0) {
        let digit = num % 10;
        newNum = newNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    return newNum === originalNum;
};
console.log(palindrome(12121));
