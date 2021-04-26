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
    let result = [];
    let count = 1;
    let num = 0;
    let flag = false;
    let sortedArray = arr.sort();
    console.log(sortedArray);
    for(let j=0; j<sortedArray.length; j++){
        if(sortedArray[j]!==sortedArray[j+1]){
            count=1
            flag=true;
        }
        else if (sortedArray[j]===sortedArray[j+1]){
            num = sortedArray[j];
            count++;
            console.log("AAAAAAAA"+" num: "+num+ "count: "+count)
        }
        if(flag){
            console.log("BBBBBBB"+" num: "+num+ "count: "+count)
            result.push(num+"-"+count)
        }
    }
    return result;
}

let arr = [1,2,1,2,3,4,3,3,4,5,6]
console.log(findOccurence(arr));