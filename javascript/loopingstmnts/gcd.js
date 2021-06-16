var num1=14;
var num2=63;
var factor;
for(let i=1;i<=14;i++){
    if(num1%i==0 & num2%i==0){
        console.log(i);
        factor=i;
    }
}

console.log(factor);