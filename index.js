// return true if given string is palindrome
// solved using recursion

const palindromeString = str => {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return palindromeString(str.slice(1, -1));
};
console.log(palindromeString("level")); // true
console.log(palindromeString("abcde")); // false
