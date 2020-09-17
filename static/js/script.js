//Challenge 3: Rock, Paper, Scissors

let rockImage = document.getElementById('rock');
let paperImage = document.getElementById('paper');
let scissorsImage = document.getElementById('scissors');

let wins = 0;
let losses = 0;
let draws = 0;

function rpsGame(yourChoice){
    humanChoice = yourChoice.id;
    botChoice = rndChoice();
    message = finalMessage(decideWinner(humanChoice, botChoice));
    rpsFrontEnd(humanChoice, botChoice, message);
}

function rndChoice (){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDataBase = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    }

    return rpsDataBase[yourChoice][computerChoice];
}

function finalMessage(score){
    if (score === 1) {
        return {'message': 'You won!', 'color': 'green'};
    } else if (score === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You lost!', 'color': 'red'};
    }
}

var imageDataBase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
}

function rpsFrontEnd(humanChoice, botChoice, message){
    

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDataBase[humanChoice] + "' width='150px' height='150px' style='box-shadow: 0 10px 50px rgba(37, 50, 233, 1)'>";
    botDiv.innerHTML = "<img src='" + imageDataBase[botChoice] + "' width='150px' height='150px' style='box-shadow: 0 10px 50px rgba(243, 38, 24, 1)'>";
    messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px'>" + message['message'] + "</h1>";
    
    if (message['message'] === 'You won!') {
        wins++;
        document.getElementById('wins').innerHTML = wins;
    } else if (message['message'] === 'You lost!') {
        losses++;
        document.getElementById('losses').innerHTML = losses;
    }else {
        draws++;
        document.getElementById('draws').innerHTML = draws;
    }

    document.getElementById('result-div-3').appendChild(humanDiv);
    document.getElementById('result-div-3').appendChild(messageDiv);
    document.getElementById('result-div-3').appendChild(botDiv);
}

function reverseFrontEnd(){
    let divs = document.getElementById('result-div-3').querySelectorAll('div');
    for (let index = 0; index < divs.length; index++) {
        divs[index].remove();        
    }

    
    document.getElementById('result-div-3').appendChild(rockImage);
    document.getElementById('result-div-3').appendChild(paperImage);
    document.getElementById('result-div-3').appendChild(scissorsImage);
}