// *****
// *****
// *****
// *****
// *****

let str = ""
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        str += "*";
    }
    str += '\n';
}

console.log(str);

//////////////////////////////////////////////
let str1 = ""
for(let i=0; i<=5; i++){
    for(let j=0; j<i;j++){
        str1+='*'
    }
    str1+= '\n'
}

console.log(str1);

//////////////////////////////////////////////

let str2 = ""
for(let i=0; i<=5; i++){
    for(let j=0; j<5-i;j++){
        str2+=' '
    }
    for(let k=0; k<i; k++){
        str2+=  "*"
    }
    str2+= '\n'
}

console.log(str2);

///////////////////////////////////////
