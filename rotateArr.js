var nums = [1,2,3,4,5,6,7]

function rotateArr(arr,reverse) {
  if(reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift())
  return arr
}  

console.log(rotateArr(nums))
console.log(rotateArr(nums,true))