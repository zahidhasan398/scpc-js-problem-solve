const findMostFrequentElement=(arr)=> {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Input is not a valid non-empty array.');
    }
  
    let mostFrequentElement;
    let maxFrequency = 0;
    const frequencyMap = {};
  
    for (const element of arr) {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Example usage:
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findMostFrequentElement(inputArray);
  console.log(result); // Output: 3
  