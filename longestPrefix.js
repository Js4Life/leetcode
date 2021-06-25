function longestPrefix(arr1) {

  var arr1 = arr1.concat().sort(), 
  a1 = arr1[0] , 
  a2 = arr1[arr1.length-1]
  L = a1.length, 
  i = 0;

  while (i < L && a1.charAt(i)===a2.charAt(i))  i++ 
      
      return a1.substring(0,i)
  

}

console.log('longest common ', longestPrefix(['SQLInjection', 'SQLTutorial']))