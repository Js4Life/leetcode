function moveZero(b) {
  for(var i=b.length-1;i>=0;i--) {
      if(b[i]===0) {
        b.splice(i,1)
        b.push(0)
      }
  }
  return b;
}

console.log(moveZero([1,2,0,0,3,6,9]))