var num1=17;
var num2=13;
var num3=25;

if(num1>num2){
    if(num1>num3){
        bigest=num1;
        if(num3>num2){
            big=num3;
            small=num2;
        }else{
            big=num2;
            small=num3;
        }
    }
    else{
        bigest=num3;
        big=num1;
        small=num2;
    }
}else{
    if(num2>num3){
        bigest=num2;
        if(num1>num3){
            big=num1;
            small=num3;
        }else{
            big=num3;
            small=num1;
        }
    }else{
        bigest=num3;
        big=num2;
        small=num1;
    }
}

console.log("The greates number among the three is",bigest);
console.log("The second greatest number among the three is",big);
console.log("The sorted numbers are: ");
console.log(small , big , bigest);


