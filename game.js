
var gamePattern=[];
var userClickedPattern=[];

var buttonColours= ["red","blue","green","yellow"]
var gameStarted=false;

var level=0



$("html").keydown(function () {
    if (!gameStarted) {
        $("#level-title").text("Level"+ level)
        nextSequence();
        gameStarted = true;
        }});
$(".btn").click(function(){
    var userchosenColor=$(this).attr("id");
    userClickedPattern.push(userchosenColor)
    playsound(userchosenColor);
    animatePress(userchosenColor);
    checkAnswer(userClickedPattern.length-1)
})
        
function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");

    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
}else {
    console.log("wrong");
    var wrongAudio= new Audio("./sounds/wrong/mp3")
    wrongAudio.play()
    
    $("h1").text( "Game OVER, Press any key to restart")
    $("body").addClass("game-over")
    setTimeout(function () {$("body").removeClass("game-over")  },200)
    startOver()
}}



function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){$("#"+ currentColour).removeClass("pressed")},100)
    console.log(currentColour)  
        
}

function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}
function nextSequence(){

    userClickedPattern=[];
    level++
    var randomNumber= Math.floor(Math.random()*4);
    var chosenColour = buttonColours[randomNumber];
    gamePattern.push(chosenColour);
    
    $("h1").text("Level " + level);
    $("#" + chosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(chosenColour);
    
}


function startOver(){ 
     gamePattern=[];
     gameStarted=false;
    level=0

}

