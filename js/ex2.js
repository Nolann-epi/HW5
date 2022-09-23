/* Tutorial 4
   Example 2 JavaScript code
*/


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function getOdd(arr) {
    return arr.filter(x => x % 2 == 0);
}

function getDiv(arr) {
    return arr.filter(x => ((x % 2 == 0) && (x % 5 == 0)));
}

function getDiv3(arr) {
    return arr.filter(x => (x % 3 == 0)).map(x => Math.pow(x, 2));
}

function getDiv5(arr) {
    return arr.filter(number => (number % 5 == 0)).map(x => Math.pow(x, 2)).reduce((e, f) => e + f);
}

console.log(getOdd(array));
console.log(getDiv(array));
console.log(getDiv3(array));
console.log(getDiv5(array));