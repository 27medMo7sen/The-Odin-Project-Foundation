let cnt = 0 , ccur=0 , pcur=0;
var mr="No time to explain the game, just score five points first.", mw="Over and over again, humans are the masters of this planet. You won!",ml="I don't feel safe anymore, the machine wins!!!";
const messageContainer = document.getElementById("ruleMassage");
var message=mr ;
displayMessage();
function displayMessage() {
       messageContainer.textContent = "Mohsen: ";

     let charIndex = 0;

     function addCharacter() {
        if (charIndex < message.length) {
              const nextChar = message.charAt(charIndex);
            messageContainer.textContent += nextChar;

             charIndex++;

              setTimeout(addCharacter, 50);
        }
    }

      addCharacter();
}
const retry = document.getElementById("retry");

const element1 = document.getElementById("P");
element1.addEventListener("click", function() {
    playGame("paper");
});

const element2 = document.getElementById("R");
element2.addEventListener("click", function() {
    playGame("rock");
});

const element3 = document.getElementById("C");
element3.addEventListener("click", function() {
    playGame("scissor");
});
retry.addEventListener("click", function() {
     location.reload();
});

const choice = document.getElementById("choice");
const movep = document.getElementById("Pm");
const movec = document.getElementById("Cm");
const cmod=document.getElementById("Cr");
const pmod=document.getElementById("Pr");
const wmmod=document.getElementById("winMassage");
const lmmod=document.getElementById("loseMassage");
const ph1=document.getElementById("imgPlaceHolder1");
const ph2=document.getElementById("imgPlaceHolder2");
const ask=document.getElementById("ask");

function playGame(userChoice) {
    choice.style.display = "none";
    const randomNum = generateRandomNumber();
    if (userChoice === "rock") {
        movep.src = "p2.png";
    } else if (userChoice === "paper") {
        movep.src = "p1.png";
    } else {
        movep.src = "p3.png";
    }if (randomNum === 2) {
        movec.src = "c2.png";
    } else if (randomNum === 1) {
        movec.src = "c1.png";
    } else {
        movec.src = "c3.png";
    }
    if(randomNum==2&&userChoice=="scissor")
    {
            cmod.textContent=`Computer: ${++ccur}`
    } else if(randomNum==2&&userChoice=="paper")
    {
            pmod.textContent=`Player: ${++pcur}`
    }else if(randomNum==1&&userChoice=="rock")
    {
            cmod.textContent=`Computer: ${++ccur}`
    }else if(randomNum==1&&userChoice=="scissor")
    {
        pmod.textContent=`Player: ${++pcur}`
    }else if(randomNum==3&&userChoice=="paper")
    {
        cmod.textContent=`Computer: ${++ccur}`
    }else if(randomNum==3&&userChoice=="rock")
    {
        pmod.textContent=`Player: ${++pcur}`
    }
    setTimeout(function() {
        movep.src = '';
        movec.src = '';
        choice.style.display = '';

        if (ccur == 5||pcur==5) {
          if(ccur==5){
              lmmod.style.display='';
              message=ml;
              displayMessage();
          }
          else{
              wmmod.style.display='';
              message=mw;
              displayMessage();
          }
          ask.style.display="flex";
          ph1.style.display="none";
          ph2.style.display="none";
          pmod.style.fontFamily="'Courier New', Courier, monospace";
          pmod.style.fontSize="32px";
          pmod.style.fontWeight="bold";
          cmod.style.fontFamily="'Courier New', Courier, monospace";
          cmod.style.fontSize="32px";
          cmod.style.fontWeight="bold";

        }
    }, 1100);
}
function generateRandomNumber() {
    const random = Math.random();
    const randomNumber = Math.floor(random * 3) + 1;
    return randomNumber;
}


