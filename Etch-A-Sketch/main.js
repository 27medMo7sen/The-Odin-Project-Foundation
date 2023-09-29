document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  let num = 16;
  let color = "blue";
  let rgbMode = false;

  function getRandomRGBColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

     function createSketchGrid() {
    const dev = document.querySelector(".sketch");
    if (dev) {
      dev.remove();
    }
    const New = document.createElement('div');
    New.setAttribute('class', 'sketch');
    for (let i = 0; i < num * num; i++) {
      const tst = document.createElement('div');
      tst.setAttribute('class', 'cell');
      New.appendChild(tst);
    }
    container.appendChild(New);
    let cell = document.querySelectorAll('.cell');
    let n = 697 / num + "px";
    for (var i = 0; i < cell.length; i++) {
      cell[i].style.height = n;
      cell[i].style.width = n;
    }

    cell.forEach(function (div) {
      div.addEventListener('mouseenter', function () {
        if (rgbMode) {
          var randomColor = getRandomRGBColor();
          div.style.backgroundColor = randomColor;
        } else {
           div.style.backgroundColor = color;
        }
      });
    });
  }

  createSketchGrid();

  let rgb = document.querySelector("#rgb");
  rgb.addEventListener("click", () => {
    rgbMode = true;
  });

  let red = document.querySelector("#r");
  let green = document.querySelector("#g");
  let blue = document.querySelector("#b");

  red.addEventListener("click", () => {
    color = "red";
    rgbMode = false;
  });

  green.addEventListener("click", () => {
    color = "green";
    rgbMode = false;
  });

  blue.addEventListener("click", () => {
    color = "blue";
    rgbMode = false;
  });

  const btn = document.querySelector('#ref');
  btn.addEventListener("click", () => {
    num = prompt("Enter number of cells on each side");
    while (num > 100 || num <= 0) {
      alert("Please keep the number in the range of 1 - 100 ");
      num = prompt("Enter number of cells on each side");
      num = Number(num);
    }
    createSketchGrid();
  });
});
