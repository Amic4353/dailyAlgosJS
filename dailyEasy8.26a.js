function removeDups(array){
  const compMemo = {}
  
  for(let i = 0; i<array.length; i++){
    const currElem = array[i]
    if(compMemo[currElem]){
      array.splice(i,1)
      i-=1
    }
    else{
      compMemo[currElem] = true
    }
  }
  return array
}

console.log(removeDups([1,1,2,3,3,4,5,5]))
