'use strict';
var arrOrg = [1, 2, 3, 4, 5, 6, 7];
var array = [];
var target = 1;
// console.log(Math.ceil(arrOrg.length / 2));
function binarySearch(arr) {
    if (arr[Math.floor(arr.length / 2)] === target)
        return arr[Math.floor(arr.length / 2)];
    if (arr[Math.floor(arr.length / 2)] > target) {
        array = [];
        for (var i = 0; i < Math.floor(arr.length / 2); i++) {
            array.push(arr[i]);
        }
        return binarySearch(array);
    }
    if (arr[Math.floor(arr.length / 2)] < target) {
        array = [];
        for (var i = Math.ceil(arr.length / 2); i < arr.length; i++) {
            array.push(arr[i]);
        }
        return binarySearch(array);
    }
    return 0;
}
console.log(binarySearch(arrOrg));
