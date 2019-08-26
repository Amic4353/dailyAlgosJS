// function palindrome(s){
//   const backwardsString = s.split('').reverse().join('')
//   if (s === backwardsString){return true}
//   return false
// }

// console.log(palindrome('aba'))


function palindrome(s){
  let firstChar = s[0]
  let lastChar = s[s.length-1]
  
  if(firstChar !== lastChar){return false}
  else if (s.length === 0 || s.length === 1){
    return true
  }
  else{
    return palindrome(s.slice(1,s.length-1))
  }
}

console.log(palindrome('aba'))
