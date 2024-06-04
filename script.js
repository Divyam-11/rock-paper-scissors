let userscore = 0;
let compscore =0 ;
let comp; 
let arr = ["rock","paper","scissors"];
let result_board = document.querySelector(".newgame");
let choices = document.querySelectorAll(".option");
let Computer= document.querySelector(".comp_score");
let player = document.querySelector(".user_score")
choices.forEach((choice) =>{
choice.addEventListener("click",()=>{
console.log(choice.classList[1],"was clicked");
check_winner(choice.classList[1]);
})
})
const check_winner = (choice)=>{

let pick = Math.floor(Math.random() * 3);
let pick_choice = arr[pick];
console.log("Computer Chose ",arr[pick]);
declare_winner(choice,pick_choice); 

}
const declare_winner = (choice,pick_choice)=>{
    
    if(choice == "rock"){
        if(pick_choice == "rock"){
            result_board.innerText = "The Game is A Draw";
        }
        else if(pick_choice == "paper"){
            result_board.innerText = "Computer Wins";
            compscore++;
            Computer.innerText = compscore;
        }
            else{
                result_board.innerText = "Player Wins";
                userscore++;
                console.log("TEST")
                player.innerText = userscore;
        }
    }
    if(choice == "paper"){
        if(pick_choice == "rock"){
            result_board.innerText = "Player Wins";
            userscore++;
            console.log("TEST")
            player.innerText = userscore;      
        }
        else if(pick_choice == "paper"){
            result_board.innerText = "The Game is A Draw";
        }
            else{
                result_board.innerText = "Computer Wins";
                compscore++;
                
                Computer.innerText = compscore;
        }
    }
    if(choice == "scissors"){
        if(pick_choice == "rock"){
            result_board.innerText = "Computer Wins";
            compscore++;
            Computer.innerText = compscore;
        }
        else if(pick_choice == "paper"){
            result_board.innerText = "Player Wins";
            userscore++;
            player.innerText = userscore;
        }
            else{
                result_board.innerText = "The Game is A Draw";
        }
    }
}