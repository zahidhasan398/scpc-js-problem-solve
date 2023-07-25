const findSecondSmallest=(arr)=> {
    if (!Array.isArray(arr) || arr.length < 2) {
      throw new Error('Input is not a valid array with at least two elements.');
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error('There is no second smallest element in the array.');
    }
  
    return secondSmallest;
  }
  

  const inputArray = [3, 1, 5, 2, 4, 2];
  const secondSmallestNumber = findSecondSmallest(inputArray);
  console.log(secondSmallestNumber);