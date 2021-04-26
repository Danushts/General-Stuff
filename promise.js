// // [1,2,[3,4]].reduce((acc,val) => acc.concat(val),[]);
// console.log([1,2,[3,4]].reduce((acc,val) => acc.concat(val),[]))



// let newArray = [1,6,3,0,2,8]

// for(let i=0; i<newArray.length; i+=2){
//     newArray[i]= newArray[i] + newArray[i+1]
//     newArray[i+1] = newArray[i] - newArray[i+1]
//     newArray[i] = newArray[i]-newArray[i+1]
// }

// console.log(newArray);



function bubbleSort(arr){
	
    var i, j;
    var len = arr.length;
        
    var isSwapped = false;
        
    for(i =0; i < len; i++){
        
        isSwapped = false;
        
        for(j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
            var temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
            }
        }
        
        // IF no two elements were swapped by inner loop, then break
        
        if(!isSwapped){
        console.log(!isSwapped)
        break;
        }
    }
        
    // Print the array
    console.log(arr)
    }
    
    
    var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
    
    // calling the bubbleSort Function
    bubbleSort(arr)