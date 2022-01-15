let main = document.getElementById('btn');
let gradient = document.getElementsByClassName('gradient');

 main.addEventListener("click", myFunction);

function myFunction() {
//    let color =  document.getElementById('firstcolor');
//    colorvalue = color.value;
//     alert(colorvalue);

// var dom = document.getElementById('mainHolder');
// dom.style.backgroundImage = 
//  let colorone = 'red';
//  let colortwo = 'yellow';
 let colorone = document.getElementById('firstcolor').value;
 let colortwo = document.getElementById('secondcolor').value;
// let gradient = document.getElementsByClassName('gradient');


console.log(colorone);
console.log(colortwo);

document.getElementById('gradient').style.backgroundImage = '-webkit-linear-gradient(-90deg,'+colorone+','+colortwo+')';
};

