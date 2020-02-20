// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

<<<<<<< HEAD
function objKey(obj) {
<<<<<<< HEAD
 var arr=[];
 for(var key in obj){
   arr.push(key);
 }
 return arr;
=======
  return Object.keys(obj);
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {
<<<<<<< HEAD
  var length=0;
  var c=0;
  for (var key in obj){
    c=c+1;
  }
  return c
=======
  return Object.keys(obj).length;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

<<<<<<< HEAD
var arr=[{id:2,value:50},{id:0,value:70},{id:1,value:40}];

function objSort(arr) {
  var arr2=[];
  var min=arr[0];
  var c=0;
  var counter=arr.length;
  while(counter>1){
    for(var i=0;i<arr.length;i++){
      if (arr[i].id <= min.id){
        min=arr[i];
        c=i;
    }
    }
  arr2.push(min);
  arr.splice(c,1);
  console.log(arr);
  counter--;
  }
  return arr2;
}
=======
// function objSort(array) {
//   var arr = [];
//   for (var i = 0; i < array.length - 1; i++) {
//     if (Object.values(array[i])[0] <= Object.values(array[i + 1])[0]) {
//       arr[i] = array[i];
//     }
//     else {
//       arr[i] = array[i];
//     }
//   }
//   return arr;
// }
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======
// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
