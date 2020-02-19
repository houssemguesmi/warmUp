//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function each(coll, f) { 
	if (Array.isArray(coll)) { 
		  for (var i = 0; i < coll.length; i++) { 
				f(coll[i], i); 
		  } 
	} else { 
		  for (var key in coll) { 
				f(coll[key], key); 
		  } 
	} 
} 
function sub(arr1,arr2) {
    var nb=0;
    var length=arr1.length;
    each(arr2, function(element, i){
        for(var j=0; j<length; j++) {
            if(element===arr1[j]){
                nb+=1;
                arr1.splice(j,1)
            }
        }
    });
    if(nb === arr2.length){
        return 'true';
    }else{
        return 'false';
    }
}