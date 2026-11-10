// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2!=1);


// console.log("2"  > 1); // here javascript convert the String format number into actual number after that, both operands are compared 
// console.log("02" > 1);
// console.log("aayush" > 1);// "aayush " are converted into NaN-Not a num so comparing it always give false 


/*1.console.log(null> 0)
2.console.log(null == 0) 
3.console.log(null >= 0)  
The reason is that an equality check == and comparisons > <> = <= works differently . 
Comparison converts  null to a number , treating it as 0 . Thats why 3. is true and 1 is false 


// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0)
This creates a confusion thats why avoid using these kind of code 
*/

console.log("2" === 2);//This is one more way of comparing operands as which compare both datatype and operand 

