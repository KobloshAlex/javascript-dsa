function mergeSortedArrays(arr1, arr2) {

    for(let i = 0; i < arr2.length - 1; i++) {
        if (arr2[i] > arr1[i]) {
            arr1.unshift(i)
        }
    }
}

// [0,3,4] [1,3,5]
//[0,1,3,3,4,5]

console.log(mergeSortedArrays([0,3,4], [1,3,5]))
