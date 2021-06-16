var num=123;
var rev=0;

while(num>1){
    l=num%10;
    rev=(rev*10)+l
    num=num/10;
}

console.log(rev); 