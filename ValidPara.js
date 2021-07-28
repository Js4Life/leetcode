let isMatchingBrackets = function(str) {

  let stack = [];
  let map = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }

    for (let index = 0; index < str.length; index++) {
      const element = str[index];

      if(element === '(' || element ==='{' || element === '[') {
        stack.push(element)
      } else {
        let last = stack.pop()

        if(element !== map[last]) {
          return false
        }
      }
      
    }

    if(stack.length !== 0) return false;

    return true;



}


console.log(isMatchingBrackets("(){}")); 
console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));
console.log(isMatchingBrackets("({(()))}}")); 
