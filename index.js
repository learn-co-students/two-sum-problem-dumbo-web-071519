let sum = 6
let array = [5, -2, 4, 9, 1]

function bruteForceTwoSum(sum, array){
  let answer = []

  for (let i=0; i <= array.length-1; i++) {
    let maxIndex = array.length-1

    for (let j=maxIndex; j>=0; j--) {

      if (i !== j) {
        let sum = array[i] + array[j]
        let pair = [array[i], array[j]]
        if (sum === 6) {
          answer.push(pair)
          console.log("answer: ", answer)
        }
      }
    }
  }
}

bruteForceTwoSum(sum, array)
