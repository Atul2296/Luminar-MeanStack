var arr = [5, 3, 6]

var array = [];



for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for(let j=0 ; j < arr.length ; ++j){
        if(j==i){
            continue;
        }else{
            sum+=arr[j];
        }
        
    }
    array[i] = sum;
}

console.log(array);