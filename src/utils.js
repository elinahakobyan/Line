export function sampleSize(arr, size) {
    const arr2 = [];

    for (let i = 0; i < size; i++) {
        let num1;
        let num = Math.floor(Math.random() * (arr.length - 1))
        if (arr[num] != num1) {
            num1 = arr[num]
            arr2.push(arr[num])
        }

    }
    return arr2;
}