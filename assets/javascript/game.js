$( document ).ready(function(){
//Select random number between 19 and 120 to be shown on start and when game is rest
  var Random=Math.floor((Math.random()*101)+19)
//append the number to the html page
  $('#randomNumber').text(Random);
// random numbers allocated to buttons betwenn 1 and 12
  var num1= Math.floor((Math.random()*11)+1)
  var num2= Math.floor((Math.random()*11)+1)
  var num3= Math.floor((Math.random()*11)+1)
  var num4= Math.floor((Math.random())*11+1)

//initialize wins and losses
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
//append the wins and losses to the page
$('#Wins').text(wins);
$('#Losses').text(losses);

//reset the game and initialize all variables
function reset(){
      Random=Math.floor((Math.random()*101)+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor((Math.random()*11)+1);
      num2= Math.floor((Math.random()*11)+1);
      num3= Math.floor((Math.random()*11)+1);
      num4= Math.floor((Math.random()*11)+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//update wins and give an alert that user won
function userWin(){
alert("You won!");
  wins++; 
  $('#Wins').text(wins);
  reset();
}
//update losses and give an alert that user lost
function userLost(){
alert ("You Lost!");
  losses++;
  $('#Losses').text(losses);
  reset()
}

function checkWin(){
	if (userTotal == Random){
         userWin();
    }else if ( userTotal > Random){
         userLost();
    }  
}
//click options for all jewels
  $('#blue').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //call the function to either call win or loss
         checkWin();
  })  
  $('#red').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        checkWin();
  })  
  $('#yellow').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
        checkWin();
  })  
  $('#green').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        checkWin();
  });   
}); 
