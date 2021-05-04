let arr = ['2', '5', '2', '4', '6', '5']
let a = []
a.push(arr[0]);
for (let i = 1; i < arr.length; i++) {
    if (!a.includes(arr[i])) 
        a.push(arr[i])
}
console.log(a)

/////////////////////////////////

let unique = arr.filter((item, i, ar) => {
    console.log("i : "+i+" ar: "+ ar+ " item: "+ item+ " === "+ar.indexOf(item))
    return ar.indexOf(item) === i
});
console.log(unique);

// IndexOf return 

// if "item" is  not present in "i" than result is 0
// if "item" is   present in "i" than result is i

////////////////////////////////

var set = new Set(arr);
console.log(set);