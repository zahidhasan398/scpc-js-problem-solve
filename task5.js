const calculate=(num1, operator, num2)=> {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Both inputs must be numbers.');
    }
  
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error('Division by zero is not allowed.');
        }
        return num1 / num2;
      default:
        throw new Error('Invalid operator. Please use one of "+", "-", "*", or "/".');
    }
  }
  
  // Example usage:
  try {
    const num1 = 10;
    const operator = '+';
    const num2 = 5;
    const result = calculate(num1, operator, num2);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(error.message);
  }