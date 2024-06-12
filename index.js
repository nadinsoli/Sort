let array = [31, 19, -1, 22, 8];

// selection sort
function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}
let selSortArray = selectionSort(array);
console.log("Selection sorted array: ", selSortArray);

// insertion sort


function insertionSort(arr) {
    let n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    
    return arr;
}

let insSortArray = insertionSort(array);
console.log("Insertion Sorted array: ", insSortArray);

// Quick sort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let quickSortArray = quickSort(array); 
console.log("Quick Sorted array: ", quickSortArray);

// merge sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let mergeSortArray = mergeSort(array);
console.log("Merge Sorted array: ", mergeSortArray);
