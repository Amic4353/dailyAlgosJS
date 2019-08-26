function addingTwoNums(num1, num2){
  const strNum1 = num1.toString()
  const strNum2 = num2.toString()
  let maxStr = 0;
  
  if(strNum1.length>=strNum2.length){
    maxStr = strNum1
  } else{
    maxStr = strNum2
  }
  
  let remainder = 0
  let finalNum = []
  
  for(let i = maxStr.length-1; i>=0; i--){
    if(strNum1[i] === undefined) {strNum1[i] = 0}
    if (strNum2[i] == undefined) {strNum2[i] = 0}
    let currDigit = Number(strNum1[i]) + Number(strNum2[i])
    currDigit = currDigit + remainder
    remainder = 0
    if(currDigit > 9){
      remainder = 1
      currDigit = currDigit-10
    }
    finalNum.unshift(currDigit)
  }
  
  if(remainder === 1){
  finalNum.unshift(remainder)
  }
  return Number(finalNum.join(''))
}


addingTwoNums(12, 90)
