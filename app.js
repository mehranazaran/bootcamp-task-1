let userege = 28;
let username = "mehran";
console.log(userege , username);

console.log("1") ;


const isactive = true;
const couponusage = 10;
const couponlimit = 20;


// falsy :
// 0
// ""
// null
// undefinde
// truthy : except above category
// nan

//const selectedcolor = null;
//const defaultcolor = "black";
//const usercolor = selectedcolor || defaultcolor;
//const usercolor = selectedcolor ? selectedcolor : defaultcolor;

//console.log(usercolor);
//challenge : #1
//a,b → swap variable value

let a = "blue";
let b = "red";

const c = a; //c = "blue"

a = b;// a = "red"
b = a;// b = "blue"

console.log(a, b);

// challenge #2
// weeks : 7 day
const bithyear = 1995;
// 2023 - 1995 → *365 → /7 =~ →
const years = 2023 - bithyear;
const days = years * 365;
const weeks = days / 7;
console.log(weeks);

//control flow :
//if-else, switch-case, for, while, ...

//sucess, pending, rejected 

//const peymentststus = "SUCCESS";

//if(peymentststus ==="SUCCESS"){
//    console.log("this is verfied peyment");
//}else if(peymentststus ==="PENDING"){
//    console.log("this is pending peyment");
//}else {
//    console.log("this is rejected peyment");
//}


//switch - case :
//const role = "ADMIN"; // "ADMIN" | "MERCHANT" | "TEACHER"

//switch(role){
// case "ADMIN": {
//    console.log("the user role is admin");
//    break;
// }
// case "MERCHANT": {
//    console.log("the user role is MERCHANT");
//    break;
// }
// case "TEACHER": {
//    console.log("the user role is TEACHER");
//    break;
// }
// default:
//    console.log("unknow user role");
//}

//for, while, do while, for in, for of

//for (initlizer; Condition; statement) {

//}

// 1-5 → odd | event

//for(let i =1; i < 10; i++) {
//if(i % 2 ===0) console.log("the even number is", i);
//}


//for(let i = 10; i = 1; i--) {
//if(i % 2 ===0) console.log("the even number is", i);
//}

let i = 1;
while (i <= 10){
    if (i % 2 === 0) console.log("the even number is", i); 
    i++;
}

//let i = 10;
//do {
//    if (i % 2 === 0) console.log("the even number is", i);
//    i++;
//} while (i <= 10);


//for - in : object
//for - of : arrey

//const user = {
//    name: "mehran",
//    email: "user@test.com",
//    phonnumber: "09303777090",
//};

//for (const key in user) {
//    console.log(user[key]);
//}

//const roles = ["ADMIN", "TEACHER", "MERCHANT"];

//for (const index in roles) {
//    console.log(index, roles[index]);
//}

//for (const item of roles) {
//    console.log(item);
//}