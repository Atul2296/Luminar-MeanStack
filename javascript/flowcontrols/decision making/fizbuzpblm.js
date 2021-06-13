var num=30;
var res ="";

if(num%15==0){
    console.log("fizzbuzz");
}else if(num%5==0){
    console.log("buzz");
}
else if(num%3==0){
    console.log("fizz");
}
else{
    console.log("Not divisible by 3,5 or 15");
}

if(num%3==0){
    res+="fizz";
}
if(num%5==0){
    res+="buzz"
}

console.log(res);





