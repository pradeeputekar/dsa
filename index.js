function hasUniqueCharacters(str) {
    let charSet = new Set();
    for (let char of str) { 
        if (charSet.has(char)) {
            return false;  
        }
        charSet.add(char);
    }
    
    return true;
}

console.log(hasUniqueCharacters("abcdef")); 
console.log(hasUniqueCharacters("hello"));  