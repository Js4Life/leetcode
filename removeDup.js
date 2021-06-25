function getUnique(arr) {
  let uniqueArr = [];
  for(var i of arr) {
    if(uniqueArr.indexOf(i) === -1 ) {
      uniqueArr.push(i)
    }
  }

  return uniqueArr
}

const arr = [1,1,2,88,89,5,6,6]
console.log(getUnique(arr))