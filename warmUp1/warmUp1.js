// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

<<<<<<< HEAD

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
function ageInSec(age,dayOfBirth,monthOfBirth,yearOfBirth){
    today = new Date()
    var year=today.getFullYear();
    var month=today.getMonth();
    var day=today.getDate();
    var years=age;
    if(month>monthOfBirth){
    months=month-monthOfBirth-1;
    }
    else months=monthOfBirth-month-1;
    if(day>dayOfBirth){
        days=day-dayOfBirth;
        }
        else days=dayOfBirth-day;
    console.log(years,months,days)
    if(months%2 ===0){
      var  monthsindays=((months/2)*30+(months/2)*31);
    }else monthsindays=((months+1/2)*30+(months-1/2)*29)
       var yearsindays=((years*12)/2*30+(years*12)/2*31)
       return days+yearsindays+monthsindays;
}
//ageInSec(19) ==> 599184000
=======
// your code is here
<<<<<<< HEAD

<<<<<<< HEAD
//1
function name(firstName, lastName) {
	return firstName + ' ' + lastName;
}
//'Siwar'+' Hkimi';

<<<<<<< HEAD
>>>>>>> 324f201c02ca2d6c79684a8829696dd310627957
=======
//2
function multipleOrNot(x, y) {
	if (x % y === 0) {
		return x + " is a multiple of " + y + ".";
	}
	else {
		return x + " is not a multiple of " + y + ".";
	}
}
//13%3===1 different from 0 so 13 isn't a multiple of 3

//3
function average(arr) {
	var i = 0;
	var average = 0;
	while (i < arr.length) {
		average = average + arr[i]
		i++
	}
	return average / arr.length
}

//average=(13+14+13+15+16+17+19+13+16+15)/10;

//4
// function ageInSeconds(day,month,year){
// var ageYear=0;
// var ageMonth=0;
// var ageDay=0;
// ageYear=(2020-year)*365*24*60;
// var array=['January','February','March','April','May','June','July','August','Septembre','October','November','December']
// if(month==='January'||month==='March'||month==='May'||month==='July'||month==='Septembre'||month==='Novembre'){
// 	ageMonth=31*24*60;
// }	
// else if(month==='April'||month==='June'||month==='August'||month==='October'||month==='December'){
// 	ageMonth=30*24*60;
// }
// else {
// 	ageMonth=28*24*60;
// }
// 
// }
//age=26*365*24*60
=======

>>>>>>> c07720253c870302a2825e47eeb180a082689769
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
