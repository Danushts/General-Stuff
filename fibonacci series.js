let fib = ()=>{
    let result = [];
    for(let i=0; i<100; i++){
        result.push(i+(i+1));
    }
    result.unshift(0,1)

    return result;
}

console.log(fib());