// To check of which two numbers is even or odd
let n = Number(prompt("Enter a number"));
let a = n % 2;
if(a==0){
    console.log("It is even");
}else{
    console.log("It is odd");
}
// To check of which two numbers is the biggest
let x = 6;
let y = 6;

if (x>y) {
    console.log("x is bigger " + x);
}else if (y>x) {
    console.log("y is bigger " + y);
}else{
    console.log("both numbers are the same");
}
// To check of which three numbers is the biggest
let q = 4;
let w = 6;
let e = 4;

if (q>w) {
    if (q>e) {
        console.log("q is the biggest");
    }else{
        console.log("e is the biggest");
    }
    
}else if(w>e){
    console.log("w is the biggest");
}
//Triangle if it is scalene, equalateral or isosceles

line1 = 4;
line2 = 5;
line3 = 6;
if(line1 == line2 && line1 == line3){
    console.log("It is a equalateral triangle");
}else if(line1 == line2 || line1 == line3 || line2 == line3){
    console.log("It is a isosceles triangle");
}else{
    console.log("It is a scalene triangle");
}

//arthemitic operations

num1 = Number(prompt("Please enter a value "));
num2 = Number(prompt("Please enter a second value "));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
