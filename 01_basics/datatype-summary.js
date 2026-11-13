//How data is kept in memory and how it is accessed leads to the two categorization of datatypes 
//1. Primitive datatype and second is non-primitive datatype
//Primitive datatype - String , number , boolean , Null, undefined , Symbol
//There is  term named call by value and call by reference . so primitive is a call by reference because if the primitive datatype data is used then a copy of reference of that value is taken from the memory not the original value.
//symbol = this datatype is used to make any value unique .
/*Example - const id = Symbol('123');
const anotherid = Symbol('123');
      console.log(id == anotherid);

      otpt = false It justify that symbol make value unique as 123 is same literal for both varible but it interpret it differently */


//BigInt  = It is used for larger number 

//Q.javaScript is which type of language statically or dynamically with justistification
//Ans - JavaScript is a dynamically typed programming language. we do not need to explicitly declare the data type of a variable. The data type is determined automatically at runtime based on the value assigned to it.

// Why is JavaScript dynamically typed?
// - Variable types are determined at runtime.
// - A variable can hold values of different data types during execution.
// - We don't need to specify types like int, String, or boolean explicitly.


const score = 100;
const scoreValue = 100.5;
const isloggedIn = false;
const outsideTemp = null;
let userEmail;

const bigNumber = 3455779382956402647572222222222222222;

// Reference type(Non primitive)
//Array, object, function

let heros = ["shaktimaan","nagraaj" ,"Moga"];
let myobj = {

    Name :"aayush",
    age : 23
}
const myfunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber)
console.log(typeof myfunction)
console.log(typeof heors)
//The type of Myfunction is objectfunction 
// the type of other Non primitive datatype is function