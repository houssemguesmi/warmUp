// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors var arrayFemales = ['Siwar', 'Nouha'];
var females=['Nouha','Siwar','Halima']
var arrayMales = ['Firas', 'Afif', 'Omar', 'Taha'];
var arrayInstructors = ['Matt', 'Cassels', 'Walid'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
<<<<<<< HEAD
function middleArray(array){
if (array.length % 2 !== 0) {
        console.log(array[(array.length)/2];
    }
    else {
        console.log(array[(array.length-1)/2])
    }
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
=======

<<<<<<< HEAD
function middleArray(array) {
    if (array.length % 2 !== 0) {
        return array[(Math.floor(array.length / 2))];
    }
    else {
        return "Enter an array with an odd length."
    }
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
function doubledEvenIndexes(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arr.push(array[i] * 2);
        }
    }
    return arr;
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
