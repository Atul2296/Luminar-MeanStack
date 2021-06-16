var num=11;
var flag=0;

for(let i=2;i<11;i++){
    if(num%i==0){
        flag=1;
    }
}

console.log(flag==0?"prime":"not prime");