let array = [31, 19, -1, 22, 8];

// selection sort
function selectionSort(arr) {
    arr = [...arr]; 
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
    arr = [...arr];
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
console.log("Insertion sorted array: ", insSortArray);

// quick sort
function quickSort(arr) {
    arr = [...arr];
    quickSortHelper(arr, 0, arr.length - 1);
    return arr;
}

function quickSortHelper(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSortHelper(arr, low, pi - 1);
        quickSortHelper(arr, pi + 1, high);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

let quickSortArray = quickSort(array);
console.log("Quick sorted array: ", quickSortArray);


// merge sort
function merge(arr, start, mid, end) {

    let start2 = mid + 1;

    if (arr[mid] <= arr[start2]) {
        return;
    }

    while (start <= mid && start2 <= end) {
        if (arr[start] <= arr[start2]) {
            start++;
        } else {
            let value = arr[start2];
            let index = start2;

            while (index != start) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;

            start++;
            mid++;
            start2++;
        }
    }
}

function mergeSort(arr, l, r) {
    if (l < r) {
        let m = l + Math.floor((r - l) / 2);

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

let arr_size = array.length;

let arr = [...array];
mergeSort(arr, 0, arr_size - 1);

console.log("Sorted array is:");
console.log(arr);

