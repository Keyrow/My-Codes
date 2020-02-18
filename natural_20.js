var num1 = 10; // var num1 set to 10
if(num1 == 20){ // if num1 is 20, print below but it is not at the moment
    console.log("Num is 20");
}
else{
    console.log("Adding 5"); // this will print
    num1 = num1 + 5; // not it will add 10+5 = 15
}
if(num1 == 15){ // next chain which is true and will print below
    console.log("Adding another 5") 
    num1 = num1 + 5; // now it adds another 5 which will be 20
} 
else if(num1 == 20) { // even though num1 now is 20 it wasn't before so below will not print
    console.log("Now it is 20");
}