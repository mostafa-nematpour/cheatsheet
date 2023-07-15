//>> array.concat(...) for Connecting
var arr1 = [3, 5];
arr1 = arr1.concat('mostafa');
//console.log(arr1); //   [ 3, 5, 'mostafa' ]


//>> arr.push() for add to last of array
var arr2 = ['item1', 'item2', 'item3'];
//console.log(arr2.push('item4')); //   4
//console.log(arr2);               //   [ 'item1', 'item2', 'item3', 'item4' ]


//>> arr.pop() for remove last item
var arr3 = ['item1', 'item2', 'item3'];
//console.log(arr3.pop()); //   item3  - undefined for empty array
//console.log(arr3);       //   [ 'item1', 'item2' ]


//>> arr.join('--') for convert array to string with separator
var arr4 = ['item1', 'item2', 'item3'];
//console.log(arr4.join("_-_"));  //item1_-_item2_-_item3


//>> arr.splice(n, m, optionalNewItem...)) for remove m items from n index and add optional item 
var arr5 = ['item1', 'item2', 'item3'];
// console.log(arr5.splice(1,2));          //  [ 'item2', 'item3' ]
// console.log(arr5);                      //  [ 'item1' ]
// arr5 = ['item1', 'item2', 'item3'];
// console.log(arr5.splice(1,2,'newItem'));//  [ 'item2', 'item3' ]
// console.log(arr5);                      //  [ 'item1', 'newItem' ]


//>> arr.forEach(...) for get a array item
var arr6 = ['item1', 'item2', 'item3'];
/*arr6.forEach(function (item) {
    console.log(item);
    
    // item1
    // item2
    // item3
    
});*/


//>> arr.includes(item) for check item in array or not
var arr7 = ['item1', 'item2', 'item3'];
// console.log(arr7.includes('item6'));// false
// console.log(arr7.includes('item1'));// true


//>> arr.filter(...) for filter array
var arr8 = [1, 2, 3, 4, 5, 6, 7];
var filteredArray = arr8.filter(function (item) {
    return item > 4;
});
// console.log(arr8);          // [ 1, 2, 3, 4, 5, 6, 7 ]
// console.log(filteredArray); // [ 5, 6, 7 ]


//>> arr.map(...) for create new arr from arr
var arr9 = ['item1', 'item2', 'item3'];
var newArr9 = arr9.map(function (item) {
    return 'effected-' + item;
});
// console.log(arr9);    //  [ 'item1', 'item2', 'item3' ]
// console.log(newArr9); //  [ 'effected-item1', 'effected-item2', 'effected-item3' ]


//>> arr.some(...) for at least one element of the array is subject to the given conditions
var arr10 = [1, 2, 3, 4, 5, 6, 7];
var answer10 = arr10.some(function (item) {
    return item > 8;
});
// console.log(arr10);    //  [ 1, 2, 3, 4, 5, 6, 7 ]
// console.log(answer10); //  false


//>> arr.some(...) for all elements of the array are subject to the given conditions
var arr11 = [1, 1, 1, 1, 1, 1, 1];
var answer11 = arr11.some(function (item) {
    return item === 1;
});
// console.log(arr11);    //  [ 1, 1, 1, 1, 1, 1, 1 ]
// console.log(answer11); //  true


//>> arr.sort(...) for sort arr
var arr12 = ['a', 'm', 'b', 'v', 'f', 'c'];
arr12.sort();
// console.log(arr12);     //  [ 'a', 'b', 'c', 'f', 'm', 'v' ]
var arr13 = [5, 21, 1, 45, 58, 2, 2, 5, 5, 2, 5];
arr13.sort(function (a, b) {
    return a > b ? 1 : -1;
});
// console.log(arr13);     // [ 1, 2, 2,  2,  5, 5, 5, 5, 21, 45, 58 ]


//>> arr.reduce( ... , initialValue) for executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
var arr14 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arr14.reduce(
    (accumulator, currentValue) => {
        // console.log(accumulator);             // 1  3  6
        return accumulator + currentValue;
    }
);
// console.log(sumWithInitial);              // 10

