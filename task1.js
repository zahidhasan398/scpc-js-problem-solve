const reverseStringFunc=(inputString)=>{
 let reverseInputArr=[];
 let reverseInputStr;
 for(i=inputString.length-1;i>=0;i--)
 {
    reverseInputArr.push(inputString[i]);
 }
 reverseInputStr=reverseInputArr.join("");
 return reverseInputStr;
}

const inputString="hello world";
const output= reverseStringFunc(inputString);
console.log(output);