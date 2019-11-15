let sum = 6
let array = [5, -2, 4, 9, 1]

function bruteForceTwoSum(sum, array){
  for (let i=0; i <= array.length-1; i++) {
    let combined = array[i] + array[i+1]
    if (combined === sum ) {
      console.log(array[i], array[i+1])
    }
  }
}

bruteForceTwoSum(sum, array)
