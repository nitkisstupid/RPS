let computerChoice = () => {
    let ran = Math.random()
    if(ran > 2/3){
        return "rock"
    }
    else if(ran > 1/3){
        return "paper"
    }
    else {
        return "scissor"
    }
}

let computerScore = 0;
let humanScore = 0;
let result = null;
let humanChoice = null;


const player_icon = document.querySelector("#player_icon");
const computer_icon = document.querySelector("#computer_icon");

const displayed_result = document.querySelector("#result");

const player_score = document.querySelector("#player_score");
const computer_score = document.querySelector("#computer_score");

const reset_btn = document.querySelector("#reset_btn");

reset_btn.addEventListener("click",()=>{
    humanScore = 0;
    computerScore = 0;
    updateScore(computerScore,humanScore);
    player_icon.src = "";
    computer_icon.src = "";
})

function setIcon(choice){
    switch (choice){
        case "rock":
            return "rock.png"
        case "paper":
            return "paper.png"
        default:
             return "scissors.png"    
    }
}
function updateScore(a,b,c="START"){
    player_score.innerText = b;
    computer_score.innerText = a;
    displayed_result.innerText = c;
}

function playgame(computerChoice,humanChoice){
    player_icon.src = setIcon(humanChoice);
    computer_icon.src = setIcon(computerChoice);
    if(computerChoice == humanChoice){
        result = "Draw";
    }
    else if((computerChoice == "rock" && humanChoice == "scissor" ) || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissor" && humanChoice == "paper")){
        computerScore++;
        result = "You lost";   
    }
    else{
        humanScore++;
        result = "You won"    
    }
    updateScore(computerScore,humanScore,result);
}

const choices = document.querySelector("#choices")

choices.addEventListener("click",(event)=>{
    humanChoice = event.target.closest("button");
    if(humanChoice!=null){
    humanChoice = humanChoice.innerText.toLowerCase();
    playgame(computerChoice(),humanChoice);
    }

})

