//array collection of same and differnet types of elemnts

//lengthlimit? theres is no length limit to javascript array

//define []

//is it possible to update? y

//insertion order is preservered or not? y

//duplication allowed or not? y

var expenses=[30000,25000,27000,25000,25000];

//  feb

//console.log(expenses[1]); //25000

//  may +2000
// expenses[4]+=2000;
// console.log(expenses[4]);

// for(let i=0; i<expenses.length ; i++){
//     console.log(expenses[i]);
// }

//  another method

var sum=0;
for(let exp of expenses){
    sum+=exp;
    if(exp>25000){
        console.log(exp);
    }
}

console.log("total expense",sum);

