// let fib = ()=>{
//     let result = [];
//     for(let i=0; i<100; i++){
//         result.push(i+(i+1));
//     }
//     result.unshift(0,1)

//     return result;
// }

// console.log(fib());



// 2nd way of doing FIBO
function fibo () {
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    console.log(fib[0]);
    console.log(fib[1]);
    for (i = 2; i <= 10; i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i - 2] + fib[i - 1];
      console.log(fib[i]);
    }
    console.log(fib)
}

fibo();
