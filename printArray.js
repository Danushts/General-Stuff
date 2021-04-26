// [1,2,3, 6,7,10,11,12] u should print continues numbers like output: [1 to 3, 6 to 7, 10 to 12

let continuesNumber = (arr) => {
    let result = [];
    let flag = 0;
    let startIndex=0;
    let lastIndex =0;
    let reached = false;
    for(let i=0; i<arr.length; i++){
        if(arr[i+1]==arr[i]+1){
            if(!flag==1)
                startIndex = arr[i];
            flag++;   
            console.log(flag);
        }
        else {
            lastIndex = arr[i]
            if(arr.includes(0) && reached==false){
                reached = true;
                result.push(startIndex+" of "+lastIndex)
                startIndex=0;lastIndex=0;
            }
            else if(startIndex!=0){
                result.push(startIndex+" of "+lastIndex);
                startIndex=0;lastIndex=0;
            }
            flag=0
        }
    }
    return result;
}

let arr = [0,1,2,3, 6,7,8,10,12]
let res = continuesNumber(arr);
console.log(res);