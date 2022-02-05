// Synchronous or blocking
// -line by line execution
const fs = require("fs");
fs.readFileSync("dele.txt", "utf-8",(err,data)=>
{
    console.log(data);
});
console.log("this is a message");
// Synchronous or blocking
// -line by line execution not guarantee
// callbacks will fire
