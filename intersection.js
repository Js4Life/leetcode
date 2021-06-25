var arr1 = [1,2,3,3]
var arr2 = [2,9,7,6,3,3]

const filterArr = arr1.filter(function(n){
    return arr2.indexOf(n) !== -1;
})

console.log(filterArr)