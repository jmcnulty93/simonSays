var gameOn = 0;
var simonList = [];
var turnNumber = 0;
var choiceNumber = 0;
var simonSequence = simonSays();
var playerChoice = [];
var playNumber = 0;



// computer simon sequence
//random number 0-3 :  0=green, 1=red, 2=blue, 3=yellow
function simonSays(){

  //var simonList = [];
  //var turnNumber = 1;

  for(i=0; i<1; i++){

    var colorNum = Math.floor(Math.random() * 4);

  //need the break for each case if you want one color
  //case in a number so no "" needed
    switch(colorNum){
      case 0:
        simonList.push("green");
        break
      case 1:
        simonList.push("red");
        break
      case 2:
        simonList.push("blue");
        break
      case 3:
        simonList.push("yellow");
        break
      }
    }
    return simonList
  }


  // function for buttom sound
  function simonSound(color){
    switch(color){
      case "green":
        var greenSound = new Audio("sounds/greenSound.mp3");
        greenSound.play();
        break
      case "red":
        var redSound = new Audio("sounds/redSound.mp3");
        redSound.play();
        break
      case "blue":
        var blueSound = new Audio("sounds/blueSound.mp3");
        blueSound.play();
        break
      case "yellow":
        var yellowSound = new Audio("sounds/yellowSound.mp3");
        yellowSound.play();
        break
      }
    }

    //new function for button annimation
    function simonLightNeon(color){
      var activeButton = document.querySelector("." + color);
      switch(color){
        case "green":
          activeButton.classList.add("greenNeon");
          setTimeout(function(){
            activeButton.classList.remove("greenNeon")
          },300);
          break
        case "red":
          activeButton.classList.add("redNeon");
          setTimeout(function(){
            activeButton.classList.remove("redNeon")
          },300);
          break
        case "blue":
          activeButton.classList.add("blueNeon");
          setTimeout(function(){
            activeButton.classList.remove("blueNeon")
          },300);
          break
        case "yellow":
          activeButton.classList.add("yellowNeon");
          setTimeout(function(){
            activeButton.classList.remove("yellowNeon")
          },300);
          break

      }
    }


    // function winCheck(){
    //   if (playerChoice.length == simonSequence.length){
    //     if (playerChoice.toString() === simonSequence.toString()){
    //       turnNumber = turnNumber + 1;
    //       document.getElementById("level").value = turnNumber;
    //       document.querySelector("h1").innerHTML = "Level  " + turnNumber;
    //       gameOn = 1;
    //       document.getElementById("onOff").value = gameOn;
    //       //document.getElementById("level").value = turnNumber;
    //       //document.querySelector("h1").innerHTML = "Level  " + turnNumber;
    //       //simonSays();
    //       //simonSequence;
    //       //playerChoice = [];
    //       //document.getElementById("simonListOutput").value = simonSequence;
    //       //document.getElementById("simonListInput").value = playerChoice;
    //
    //
    //     }
    //     else {
    //       document.getElementById("level").value = "You Lose";
    //       gameOn = 0;
    //       document.getElementById("onOff").value = gameOn;
    //       turnNumber = 0;
    //       //document.getElementById("level").value = turnNumber;
    //       document.querySelector("h1").innerHTML = "Level  " + turnNumber;
    //     }
    //     // else if (playerChoice.toString() !== simonSequence.toString()) {
    //     //   document.getElementById("level").value = "You Lose";
    //     //   gameOn = 99;
    //     //   document.getElementById("onOff").value = gameOn;
    //     // }
    //   }
    // }

    function winCheck(){


      if (playerChoice.length == simonSequence.length && playerChoice.toString() === simonSequence.toString()){

          turnNumber = turnNumber + 1;
          document.getElementById("level").value = turnNumber;
          document.querySelector("h1").innerHTML = "Level  " + turnNumber;
          document.querySelector("h5").innerHTML = "Number of Guesses  " + turnNumber;
          playNumber = 0 ;
          gameOn = 1;
          document.getElementById("onOff").value = gameOn;
          //simonSays();
          //simonSequence;
          //playerChoice = [];
          //document.getElementById("simonListOutput").value = simonSequence;
          //document.getElementById("simonListInput").value = playerChoice;
          simonSequence = simonSays();
          replicateThis();

          document.getElementById("simonListOutput").value = simonSequence;
          playerChoice = [];
          document.getElementById("simonListInput").value = playerChoice;


        }

        else if (playerChoice.length == simonSequence.length && playerChoice.toString() !== simonSequence.toString()){
          document.getElementById("level").value = "You Lose";
          document.querySelector("h3").innerHTML = "You completed " + (turnNumber - 1) + " Levels successfully and failed on Level " + turnNumber + " !";
          gameOn = 0;
          document.getElementById("onOff").value = gameOn;
          turnNumber = 0;
          //document.getElementById("level").value = turnNumber;
          document.querySelector("h1").innerHTML = "Level  " + turnNumber;
          document.querySelector("h5").innerHTML = "GAME OVER" ;
          document.querySelector("body").style.backgroundColor = "orange";
        }

        else if (playerChoice.length < simonSequence.length){
          gameOn = 1;
          document.getElementById("onOff").value = gameOn;
          document.getElementById("level").value = "Keep Guessing";
          document.querySelector("h3").innerHTML = "Keep Guessing";
          document.querySelector("h5").innerHTML = "Number of Guesses: " + (turnNumber - playNumber) ;

        }


      }



    //Play button
    document.querySelector(".play").addEventListener("click",function(){
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("h3").innerHTML = "Buttons will flash with sounds...replicate the sequence...how many levels can you master?";
      turnNumber = 1;
      document.getElementById("level").value = turnNumber;
      document.querySelector("h1").innerHTML = "Level  " + turnNumber;
      gameOn = 1;
      document.getElementById("onOff").value = gameOn;

      playNumber = 0;

      choiceNumber = 0;
      document.getElementById("choice").value = choiceNumber;

      playerChoice = [];
      document.getElementById("simonListInput").value = playerChoice;
      //simonSays();
      simonList = [];
      //simonSequence = [];
      simonSequence = simonSays();
      document.getElementById("simonListOutput").value = simonSequence;
      replicateThis();
    });




    //// for loop for Click Event Listener to play sound and annimation when button is clicked
    for (i=0; i<4; i++){
      document.querySelectorAll(".colorB")[i].addEventListener("click", function(){
        //var playerChoice = [];
        var buttonInnerHTML = this.innerHTML;
        //console.log(buttonInnerHTML.toLowerCase());
        simonSound(buttonInnerHTML.toLowerCase());
        //simonLight(buttonInnerHTML.toLowerCase());
        simonLightNeon(buttonInnerHTML.toLowerCase());
        playerChoice.push(buttonInnerHTML.toLowerCase());
        document.getElementById("simonListInput").value = playerChoice;
        winCheck();
        //playerChoice is not updated when wincheck runs, onChange turnNumber?
        choiceNumber = choiceNumber + 1;
        document.getElementById("choice").value = choiceNumber;

        playNumber = playNumber + 1;


      });
    }

//not working????? change or onChange ?????
document.getElementById("choice").addEventListener("change", function(){
  winCheck();
});

document.querySelector(".checkWin").addEventListener("click", function(){
  winCheck();
});

//for loop that plays sound to show user the Simon Sequence to replicate
// function replicateThis() {
//
//   setTimeout (function() {
//     for(i=0; i<simonSequence.length; i++){
//
//       simonSound(simonSequence[i]);
//       simonLightNeon(simonSequence[i]);
//
//     }}, 300 + (2000 * i) );
//   }

//when this function gets called in winCheck(), the simonSequence was just updated in the winCheck function...
//therefore replicateThis will be referencing the old simonSequence.length...not sure...theory???....
// somehow its running through the current simonSequence color list correctly....so how does it not have an
//up to date length????
function replicateThis(){
  for (i=0; i<=simonSequence.length; i++){
    simonSaysDoThis(i);

  }
}

function simonSaysDoThis(i){
  setTimeout(function(){
    simonSound(simonSequence[i]);
    simonLightNeon(simonSequence[i]);
  }, 2000 + (800 * i) )
}

// function simonSaysDoThis(i){
//   if (i==0){
//     setTimeout(function(){
//       simonSound(simonSequence[i]);
//       simonLightNeon(simonSequence[i]);
//     }, 2000 + (1000 * i) )
//
//   }
//   else if (i>0){
//     setTimeout(function(){
//       simonSound(simonSequence[i]);
//       simonLightNeon(simonSequence[i]);
//     }, 800 + (1000 * i) )
//   }
//
// }


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////




//var turnNumber = 1;
//document.getElementById("level").value = turnNumber;

//var gameOn = 1;
//document.getElementById("onOff").value = gameOn;

//var playerChoice = [];
/////////////////////////////////////////////////////

//var simonSequence = simonSays();
//simonSays();
//document.getElementById("simonListOutput").value = simonSequence;
//document.getElementById("simonListOutput").value = simonSays();

//var simonSequence = simonSays();
//replicateThis();

//winCheck();
