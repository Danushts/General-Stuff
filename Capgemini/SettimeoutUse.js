var foo = () =>{
    console.log('helloo')
    setTimeout(()=>{console.log("1st")},1000)
    setTimeout(()=>{console.log("2nd")},0)
    setTimeout(()=>{console.log("2nddd")},-1000)
    console.log("ENDDDD")
}

foo();