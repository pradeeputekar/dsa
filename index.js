// find greatest comman divisor

const findGCD1 = (first, second) => {
    let least = first % second;
    if (first % second === 0) {
        return second;
    }
    return findGCD1(second, least);
};

console.log(findGCD1(48, 18)); //6

// OR

const findGCD2 = (first, second) => {
    if (second === 0) {
        return first;
    }
    return findGCD2(second, first % second);
};

console.log(findGCD2(48, 18)); // 6
