


for (let row = 1; row <= 5; row++) {
    let str = "";
    for (let colom = 1; colom < 10; colom++) {
        if(row==5){
            if(colom>5){
                break;
            }else{
            str+="* ";
            }
        }else{
         if ((row + colom == 6) || (colom - row == 4)) {
            str += "* ";
        } else {
            str += " ";
        }
    }

    }
    console.log(str);
}
