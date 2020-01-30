var randomNumber = "empty";
var wrongCounter = 0;
var rightCounter = 0;
var triedAlready = false;

function randomNumberGenerate(){
    var x = Math.ceil(Math.random() * 10);
    var y = Math.ceil(Math.random() * 10);
    
    if(x == 10) x = 9;
    if(y == 10) y = 9;
    
    var xAppendY = "" + x + y;
    randomNumber = xAppendY;
    return randomNumber;
    
}

function onClickChangeNumber() {
    randomNumberGenerate();
    document.getElementById("circleNumber").innerHTML = randomNumber;
    document.getElementById("answerOne").value = "";
    document.getElementById("answerTwo").value = "";
    document.getElementById("circleAnswerId1").style.borderColor = "rgba(255, 150, 50, 0.7)";
    document.getElementById("circleAnswerId2").style.borderColor = "rgba(255, 150, 50, 0.7)";
    triedAlready = false;
}

function setCounter(num1, numMin, num2, numMax) {
    if (num1 == numMin && num2 == numMax){
            rightCounter =+ (rightCounter+1);
            document.getElementById("right").innerHTML = rightCounter;
            triedAlready = true;
        } else {
            wrongCounter =+ (wrongCounter+1);
            document.getElementById("wrong").innerHTML = wrongCounter;
            
        }
    
}

function checkCircleNumbers() {
    var num1 = document.getElementById("answerOne").value;
    var num2 = document.getElementById("answerTwo").value;
    
    var numMin = (Math.floor(randomNumber/10)) * 10;
    var numMax = (Math.ceil(randomNumber/10)) * 10;
    
    switch (num1 == numMin){
        case true: 
            document.getElementById("circleAnswerId1").style.borderColor = "rgba(0, 255, 0, 1)";
            break;
        case false: document.getElementById("circleAnswerId1").style.borderColor = "rgba(255, 0, 0, 1)";
    }
    
    switch (num2 == numMax){
        case true:
            document.getElementById("circleAnswerId2").style.borderColor = "rgba(0, 255, 0, 1)";
            break;
        case false:
            document.getElementById("circleAnswerId2").style.borderColor = "rgba(255, 0, 0, 1)";
    }
        
    if ( triedAlready == false ) {
            setCounter(num1, numMin, num2, numMax);
    
        }
    
    }
    
    
    /*if (num1 == numMin || num2 == numMax){
        if (num1 == numMin)
        document.getElementById("circleAnswerId1").style.borderColor = "rgba(0, 255, 0, 1)";
        document.getElementById("circleAnswerId2").style.borderColor = "rgba(0, 255, 0, 1)";
    } else {
        document.getElementById("circleAnswerId1").style.borderColor = "rgba(255, 0, 0, 1)";
        document.getElementById("circleAnswerId2").style.borderColor = "rgba(255, 0, 0, 1)";
    }*/

