function getRandomCharacterFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=[]{}|:;<>,.?/';
  
    const allCharacters =
      uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomCharType = getRandomCharacterFromArray([
        'uppercase',
        'lowercase',
        'number',
        'special',
      ]);
  
      switch (randomCharType) {
        case 'uppercase':
          password += getRandomCharacterFromArray(uppercaseLetters);
          break;
        case 'lowercase':
          password += getRandomCharacterFromArray(lowercaseLetters);
          break;
        case 'number':
          password += getRandomCharacterFromArray(numbers);
          break;
        case 'special':
          password += getRandomCharacterFromArray(specialCharacters);
          break;
      }
    }
  
    return password;
  }
  
  // Example usage:
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);