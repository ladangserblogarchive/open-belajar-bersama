// Mencari nilai tidak beraturan dalam sebuah array

function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] != undefined) {
            if (arr[i] + 1 != arr[i+1]) {
                return arr[i+1]
            }
        } else {
            return null;
        }
    }
}

const first = firstNonConsecutive([1,2,3,4,5,6,7,8]);