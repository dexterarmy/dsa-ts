'use strict';
var arrOrg = [1, 2, 3, 4, 5, 6, 7];
var target = 6;
// console.log(Math.ceil(arrOrg.length / 2));
function binarySearch(arr) {
    if (arr[Math.floor(arr.length / 2)] === target)
        return arr[Math.floor(arr.length / 2)];
    if (arr[Math.floor(arr.length / 2)] > target) {
        for (var i = 0; i < Math.floor(arr.length / 2); i++) {
            arr = arr[i];
        }
        return binarySearch(arr);
    }
    if (arr[Math.floor(arr.length / 2)] < target) {
        for (var i = Math.ceil(arr.length / 2); i < arr.length; i++) {
            arr = arr[i];
        }
        return binarySearch(arr);
    }
    return 0;
}
console.log(binarySearch(arrOrg));
