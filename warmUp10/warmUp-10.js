// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(str){
    var arr=str.split('');
    var j=1;
    var i=arr.length-1;
    var arr2=[];
    while(i>=0){
        arr2.push(arr[i]+j)
        i--;
        j++;
    }
    str=arr2.join('');
    return str.substring(0,str.length-1);
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
<<<<<<< HEAD
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
<<<<<<< HEAD
function sameLength(array) {
    var arrayOfSameLengths=[];
    var str=array[0];
    for(var i=1; i<array.length; i++){
        if(str.length === array[i].length){
            arrayOfSameLengths.push(str,array[i]);
        }
    }
    return arrayOfSameLengths;
=======

function sameLength(arrayOfStrings) {
    var arraySameLength = [];

    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length === arrayOfStrings[i + 1].length) {
            arraySameLength.push(arrayOfStrings[i], arrayOfStrings[i + 1]);
        }
    }
    return arraySameLength;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
