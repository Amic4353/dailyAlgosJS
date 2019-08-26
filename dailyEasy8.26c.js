
function convertRomanNums(romanStr){
  let finalNum = 0
  
  let dictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  }
  
  while(romanStr.length){
    if(dictionary[romanStr.slice(0,2)]){
      finalNum += dictionary[romanStr.slice(0,2)]
      romanStr = romanStr.slice(2)
    }
    else {
      finalNum += dictionary[romanStr[0]]
      romanStr = romanStr.slice(1)
    }
  }
  return finalNum
}

console.log(convertRomanNums('MCMXCIV'))
