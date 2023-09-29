const btn = document.querySelector('#ref');
const container = document.querySelector(".container");
let num , color="blue";
btn.addEventListener("click",()=>{
  num = 0;
 num = prompt("enter number of cells on each side");
  while (num > 100 || num <= 0) {
    alert("please keep the number in the range of 1 - 100 ");
    num = prompt("enter number of cells on each side");
    num=Number(num);
  }
  const dev = document.querySelector(".sketch");
  dev.remove();
  const New=document.createElement('div');
  New.setAttribute('class' , 'sketch')
  for (let i = 0 ; i < num*num ; i ++){
    const tst = document.createElement('div');
    tst.setAttribute('class','cell');
    New.appendChild(tst);
  }
  container.appendChild(New);
  let cell=document.querySelectorAll('.cell');
  let n = 697/num +"px" ;
  for (var i = 0 ; i < cell.length ;i++){
    cell[i].style.height=n;
    cell[i].style.width=n;
  }
  let red = document.querySelector("#r");
  let green = document.querySelector("#g");
  let blue = document.querySelector("#b");
  let rgb=document.querySelector("#rgb")
  red.addEventListener("click",()=>{
    color="red";
  })
  green.addEventListener("click",()=>{
    color="green";
  })
  blue.addEventListener("click",()=>{
    color="blue";
  })
  rgb.addEventListener("click",()=>{
    function getRandomRGBColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

// Loop through the selected div elements and add event listeners
    cell.forEach(function(div) {
      div.addEventListener('mouseenter', function () {
        // Generate a random RGB color on mouse enter
        var randomColor = getRandomRGBColor();
        div.style.backgroundColor = randomColor;
      });
    })
  })
  cell.forEach(function(div) {
    div.addEventListener('mouseenter', function () {
      // Change the background color on mouse enter
      div.style.backgroundColor = color;
    });
  });
})
let red = document.querySelector("#r");
let green = document.querySelector("#g");
let blue = document.querySelector("#b");
let rgb=document.querySelector("#rgb")
red.addEventListener("click",()=>{
  color="red";
})
green.addEventListener("click",()=>{
  color="green";
})
blue.addEventListener("click",()=>{
  color="blue";
})
rgb.addEventListener("click",()=>{
  function getRandomRGBColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

// Loop through the selected div elements and add event listeners
  cell.forEach(function(div) {
    div.addEventListener('mouseenter', function () {
      // Generate a random RGB color on mouse enter
      var randomColor = getRandomRGBColor();
      div.style.backgroundColor = randomColor;
    });
  })
  })
let cell=document.querySelectorAll('.cell');
cell.forEach(function(div) {
  div.addEventListener('mouseenter', function () {
    // Change the background color on mouse enter
    div.style.backgroundColor = color;
  });
});
