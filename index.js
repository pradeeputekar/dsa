// find least comman multiple of three numbers

const findLCM = (first, second, third) => {
  let i = 1
    while (true ) {
        let factor = first * i;
        if (factor % second === 0 && factor % third === 0) {
            return factor;
        }
        i++
    }
};

console.log(findLCM(4, 6, 8)); // 24
console.log(findLCM(4, 5, 6)); // 60
console.log(findLCM(3, 7, 14)); // 42
console.log(findLCM(2, 3, 4)); // 12
