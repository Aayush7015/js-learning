"user strict "// There  is old way of writing javaScript but when we use "user strict" the engine like node got the information that now all the code written here is in new way nowdays engine automatically know that the code written is in new way so no need to to write user strict but for good practice we write 


 //alert(3+3); //  we r ussing nodejs npt browser - This works in a browser because the browser provides the alert() function. It doesn't work in standard Node.js because Node.js doesn't provide that browser feature.
//    why we use semi colon - to improve the readabilty of code 
/*console.log(3 + 3 ) console.log("aayush")     the readabilty is also very important in development  using the semi -colon is also very important */



/*


  console.log(3 
     +3
    )

    console.log ("aayush");
   */ 

// Data type 
 
let name = "aayush";
let age = 22;
let isLoggedIn = false;
let state  =null;

//number -> 2 to the power 53
//bigInt -> it is used rarely when number not adjut in number
// String = ""
// boolean = true/false
// null = standalone value - khali value  like if we want temperature server have no any value to predict so it gives null means khali  not 0 as 0 also represent a temperature so it create confusion
// undefined 
//symbol -> unique  It is mostly used to represent uniqueness like in it is used in reactjs

// object 

console.log(typeof "aayush")

console.log(typeof undefined); //undefined is also a type of undefined
console.log(typeof null); // null is a type of object 