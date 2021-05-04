var pro = ()=> {
return new Promise((resolve,reject) =>{
    resolve("resolvedd")// same for reject
})
}

pro()
.then(res => {throw new Error(res)})
    .catch(err=>{console.log(err)})
    .then(resu => {
        console.log(resu)
        throw new Error(resu)
    })
    .catch(errr =>{console.log(errr)})

//  Error: resolvedd
//     at /Volumes/DISK 2/NodeJS/General-Stuff/Capgemini/PromisesTricks.js:8:21
// undefined
// Error
//     at /Volumes/DISK 2/NodeJS/General-Stuff/Capgemini/PromisesTricks.js:12:15