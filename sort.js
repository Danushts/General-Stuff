// find second largest number in array without using inbuilt functions.

let sort = (arr) => {
    let flag = false
    for(let i=0; i<arr.length; i++){
        flag = false;
        for(let j=0; j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                arr[j] = arr[j]+arr[j+1]
                arr[j+1] = arr[j] - arr[j+1]
                arr[j] = arr[j]-arr[j+1] 
                flag = true;
            }
        }
        if(!flag){
            break;
        }
    }
    return arr;
}

let sortedArray = sort([4,99,1,100,4,3,8]);
console.log(sortedArray);
console.log(sortedArray[sortedArray.length-2])