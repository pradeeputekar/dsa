// sort given array

const sortArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
console.log(sortArray([1, 3, 4, 2]));

// OR

const quicksort = arr => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

console.log(quicksort([1, 3, 4, 2]));
