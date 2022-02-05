console.log("this is tutorial javascript");
function greet(name1,greetText="greetings from javascript"){
    let name2="name2"; // scope is local 
    console.log(greetText + " " + name1);
    console.log(name1 + " is a good boy ");
}
function sum(a,b,c){
    let d=a+b+c;
    return d;
    // this line will never execute(unreachable code)
    // console.log("function is returned");
}


//  scope is global
let name1="ashish";
let name2="ash";
let name3="pinku";
let name4="A.K.MISHRA";
let greetText="good morning";
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4);
// let returnval=greet(name3);
// console.log(returnval);
let returnval=sum(1,2,3);
console.log(returnval);
// console.log(name1+" is a good boy") ;
// console.log(name2+" is a good boy") ;
// console.log(name3+" is a good boy") ;
// console.log(name4+" is a good boy"); 