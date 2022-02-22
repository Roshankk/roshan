// Assignment of 13 feb:-
// /*
// Assignment 1
// Print All Prime Numbers from 1 to 500
// */
var count;
console.log("Prime Numbers Between 1 to 500:");
for (var i = 1; i<= 500; i++)
{  
    count=0;
        for (var a = 1; a <= i; a++)
        {
           if (i %a == 0)
               count++;
        }
            if (count == 2)
           console.log(i);
}





// /*
// Assignment 2
// Using for of loop, print the concatinated string of an array
// Eg -
// Array -> ["A", "B", "C", "D"]
// Output -> A B C D
// */




const arr = ["A", "B", "C", "D"];
let text = "";
for (let x of arr) {
  text += " " + x;
}
console.log(text);



/*
Assignment 3
Using Rest Operator, create one function to print the sum considering below condition
Multiply each element with 2 and then take the sum
Eg -> functionName(2, 3, 4, 5, 6, 7, 8)
Output -> 2*2 + 3*2 + 4*2 + 5*2 + 6*2 + 7*2 + 8*2 (Result) -> 70
*/

function funMultiplication(...input){
    let product = 0;
    for(let i of input){
        product = product+i*2;
    }
    return product;
}
console.log(funMultiplication(2,3,4,5,6,7,8));