var num1 = 10; // num1 is 10
var num2 = 5; // num2 is 5
if(num1 % num2 == 0){ // this statement is true
    num1 += 3; // 10+3=13
    num2 += 4; // 5+4=9
}
else if(num1 % 2 == 0){ // this step is skipped
    num1 = num2 / 3;
}
else{ // this step is skipped
    num2 = num1 / 2;
}
if(num1 == 13){ // since num1 is now set to 13 this statement is true
    num1 = num1 / 2; // takes 13/2=6.5
    num2 = Math.trunc(num1); // removes decimal, sets num2 to num1 which is 6
}
if(num2 % 3 == 0){ // 6 is divisible by 2, true statement
    num1 += 4.5; // 6+4.5=10.5
}
else{ // skips this step
    num1 -= 2;
}
console.log(num1); // print6.5
console.log(num2); // prints 10.5