// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD
5<7

=======
// The correct comparison operator to display "true", when: 5 is less than 7 is: <:
5 < 7;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
<<<<<<< HEAD
//    helloWorld('') ==> 'Hello, World'     
function helloWorld(lg){
    if(lg === 'fr'){
        return 'Bonjour tout le monde';
    }else if (lg === 'es'){
        return 'Hola, Mundo';
    }else return 'Hello, World';
}

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverse(arr){
    var arr2=[];
    for(var i=arr.length-1;i>=0;i--){
        arr2.push(arr[i]);
    }
    return arr2;
}
=======
//    helloWorld('') ==> 'Hello, World'


// This function returns the traduction of the phrase: 'Hello word' in Frensh ('fr'), Spanish ('es'), and in English ('en'). It is by default is English
function helloWorld(languageCode) {
    if (languageCode === '' || languageCode === 'en') {
        return 'Hello, World';
    }
    else if (languageCode === 'fr') {
        return 'Bonjour tout le monde';
    }
    else if (languageCode === 'es') {
        return 'Hola, Mundo';
    }
    else {
        return "Language not available."
    }
}



//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]

function reverseArray(array) {
    var arr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }
    return arr;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
