// function getSum(numbers){
//     // console.log( numbers);
//     let sum = 0;
//     for( let i = 0; i < numbers.length; i++){
//  const index =i;
//  const element =numbers[index]
//  console.log(index, element);
//  return sum;
//     }
// }
// const myNumber =[ 12, 56, 45, 34, 35, 45, 34];
// getSum( myNumber );







// function getSum(numbers){
//     // console.log( numbers);
//     let sum = 0;
//     for( let i = 0; i < numbers.length; i++){
//  const index =i;
//  const element =numbers[index]
//  console.log(index, element);
 
//     }
//     return sum;
// }



// function getSum( numbers){
//      for( let i = 0; i < numbers.length; i++){
//          const index = i;
//          const element = numbers[index];
//          if( element % 2 !== 0){
                  
//              console.log(index, element);
//              oddnumbers.push(element);
//          }
        
//     }
   
// }



// const myNumber =[ 12, 56, 45, 34, 35, 45, 34];
// const oddnumbers = getSum( myNumber );
// console.log( oddnumbers);
// getSum( oddnumbers);
// console.log( 'odd number sum');











// 1+ 2 + 3 + 4+ 5+ 6+ 7+ +8 



// function sumNumber( number){
//     let sum = 0;
//     for( let i = 1; i <= number; i++){ 
//         sum =sum + i;
//         console.log( i, sum);
//     }
//     return sum;
// }
// const sum = sumNumber(9);

// 1 * 2* 3* 4* 5* 7*


// function sumNumber( number){
//     let result = 1;
//     for( let i = 1; i <=number; i++){ 
//         result = result * i;
//         console.log( i, result);
//     }
//     return result;
// }
// const result = sumNumber(9);
// const result = sumNumber(9);





// 1- 2- 3- 4- 5- 6- 7- 8-


// function sumNumber( number){
//     // let sum = 0;
//     for( let i = number; i >= 1; i--){ 
//         // sum =sum - i;
//         console.log( i,);
//     }
//     // return sum;
// }
// // const sum = 
// sumNumber(9)



// function sumNumber( number){
//     let result = 1;
//     for( let i = number; i >= 1; i--){ 
//         result = result * i;
//         console.log( i, result);

//     }
//     return result;
// }
// const sum = sumNumber(9);
// console.log('valo');



// Debug 

function getFactorial( number){ 
    let factorial = 1;
    for( let i = 0; i <= 7; i++){
        factorial = factorial + i;
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log( 'factorial of 8 is : ', factorial );