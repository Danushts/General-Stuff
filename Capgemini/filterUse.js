let str1 = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Rubyyyyyyyyyy']
str1.forEach((x) => {
  if(x.length > 8){  
    console.log(x);
  }
})
// VM125:4 Javascript
// VM125:4 Rubyyyyyyyyyy
// undefined

let str1 = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Rubyyyyyyyyyy']
var x = str1.filter(x => x.length>8)
console.log(x)
// VM298:3 (2) ["Javascript", "Rubyyyyyyyyyy"]
// undefined