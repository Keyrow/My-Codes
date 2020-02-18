var num2 = 10; // var2 set to 10
if(num2 % 2 == 0){ // 10 is divisible by 2 == 0
    console.log("Divisible by 2"); // this will print
    num2 = num2 * 3; // it will take 10 and multiply by 3 which is now 30
}
if(num2 % 3 == 0){ // since num2 now set to 30 it is divisble by 3
    console.log("Divisible by 3"); // this will print
    num2 = num2 / 2;   // now it will take 30 and divide 2 = 15
}
else if(num2 % 5 == 0){ // because this is else if, and prev if statement is true, this step is skipped
    console.log("Divisible by 5");
    num2 = num2 * 7;
}
if(num2 % 7 == 0){ // num2 set to 15 so it is not divisible by 7, false
    console.log("Divisible by 7"); // this will not print
    num2 = num2 - 10;
}
else{
    console.log("Almost there!") // this will print since prev statement was false
    num2 = num2 / 2; //num2 is 15 and divide 2 = 7.5
}
console.log(num2); // it will print 7.5