function forLoop(array){
  for (var i=0; i<25; i++){
    if (`${i}===1`){
      array.push ("I am 1 strange loop")
    }else {
      array.push (`"I am ${i} strange loop"`)
    }
  }
  return array
}

var n = 100

function whileLoop(n){
  while (n > 0){
    return n
  }
