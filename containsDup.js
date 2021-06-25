function checkForDup(a) {
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      return true
    }
  }
  return false
}

var nums = [1,2,3]
console.log(checkForDup(nums))