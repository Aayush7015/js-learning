const accountId = 12345;
let accountEmail = "aayush@google.com";
var accountPassword = "12345";
accountcity = "jaipur"; // As it is not good practice variable can be declared in these way as well 
let accountState ;// In javascript if we only  declare any variable and not assigning any value then it is perceive it as a undefined 







//accountId = 2 As accountId is already a constant so it can't be reassigned 

accountEmail = "hc@hc.com";
accountPassword = "212121";
accountcity = "Bengaluru";


/*
 Prefer not to use var 
 because of issue in block scope or functional space 

*/

console.table([accountId, accountEmail, accountPassword, accountcity ,accountState]); // This is the way of printing the value in tabular format