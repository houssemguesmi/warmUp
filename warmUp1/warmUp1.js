// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.


// your code is here
function combine(firstName,lastName){
    return firstName+' '+lastName;
}
//combine('Afif','Rakrouki') ==> 'Afif Rakrouki'
function check(){
    if ((13%3)===0){
        return true
    }
    return false;
}
var arrx=[13,14,13,15,16,17,19,13,16,15]
//check() ==> False
function average(arrx){
    s=0;
    for(i=0;i<arrx.length){
        s=s+arrx[i];
    }
    return s/arrx.length;
}
//average(arrx) ==> 15.1
function ageInSec(age){
return age*365*24*60*60;
}
//ageInSec(19) ==> 599184000