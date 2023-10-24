let a =   "Hey What's Your Name?";
// console.log(a)
// console.log(typeof a)
a=Number.parseInt(a)
console.log(typeof a)
if(a>0){
    console.log("This is a valid age")
}
else{
    console.log("This is an invalid age")
}
//  var a= prompt("Hey whts your age");
// a=Number.parseInt(a);
// if(a<0)
// {
//     alert("This is an invalid age");
// }
// else if(a<9)
// {
//     alert("Now You are a kid");
// }
// else if(a>=9 && a<18)
// {
//     alert("Still you are a kid but you can think to drive after 18");
// }
// else
// {
//     alert("Now you are eligible to drive");
// }

// switch statement
let age= 20 ;
 
switch(age)
{
    case 12: //after case we write value 
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    case 14:
        console.log("Your age is 14");
        break;
    case 15:
        console.log("Your age is 15");
    break;
    default:
        console.log("Your age is not special");
}

//ternary operator
console.log("You can",(age<18? "not drive":"drive"));
let salary = 32000;
console.log(salary>100000?"You are rich and enjoy": "You are poor and can't enjoy")
