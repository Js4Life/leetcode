function findMissing(arr) {
  const missing = [];
  const count = arr[arr.length-1]
  for (let i = 0; i < count; i++) {
    if (arr.indexOf(i) == -1) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(findMissing([1,3,4,6]))