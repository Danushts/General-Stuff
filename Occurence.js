// [1,2,1,2,3,4,3,3,4,5,6]
// Output 
// 1-2
// 2-2
// 3-3
// 4-2
// 5-1
// 6-1 

// Find occurance of numbera


let findOccurence = (arr) => {
    console.log(arr.sort())
    let result = {};
    for(var i=0; i<arr.length; i++){
        if(!result[arr[i]]){
            result[arr[i]] = 1
        }else{
            result[arr[i]]++
        }
    }
    return result;
}

let arr = [1,2,1,2,3,4,3,3,4,5,6]
console.log(findOccurence(arr));