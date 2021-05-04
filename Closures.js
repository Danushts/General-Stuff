// function outer(){
//     var a= 1;
//     function inner(){
//         var b=0;
//         // a+=b
//         console.log(a+=b);
//         a++;
//     }
//     return inner;
// }

// var x = outer();
// console.log(outer());
// x();
// x();
// x();

let arr=['2','5','2','4','6','5']
let a=[]
arr.sort();
a.push(arr[0]);
for(let i=1; i<arr.length; i++){
if(!arr[i].includes(a)){
console.log(i+" : "+ arr[i]);
console.log(a);
a.push(arr[i])
}
}
console.log(a)
