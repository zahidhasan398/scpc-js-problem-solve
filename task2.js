const positiveNumbersSum=(inputArr)=>{
   let filterPositiveNumber=[];
   for(let i=0;i<inputArr.length;i++)
   {
    if(inputArr[i]>0)
    {
        filterPositiveNumber.push(inputArr[i]);
    }
   }
   const result=filterPositiveNumber.reduce((prev,current)=>prev+current,0)
   return result;
}

const inputArr=[2,-5,10,-3,7];
const sum=positiveNumbersSum(inputArr);
console.log(sum);