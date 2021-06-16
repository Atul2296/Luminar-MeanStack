var low=21;
var ipp=40;

for(i=21;i<=40;++i){
    var flag=0;
    for(j=2;j<i;++j){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        console.log(i);
    }
}