var Plr1Name = localStorage.getItem("P1Name")
var Plr2Name = localStorage.getItem("P2Name")

var Plr1Score = 0
var Plr2Score = 0

Num_of_rounds = localStorage.getItem("Rounds")

Answer_Turn = "P1"
Question_Turn = "P2"

Plr1Role = "Answer Turn"
Plr2Role = "Question Turn"

RoundNum = 1

function CheckToEnd(){
    if (RoundNum > Num_of_rounds){
        console.log("End match")
        window.location = "Results.html"
        if (Plr1Score > Plr2Score){
            localStorage.setItem("Winner",Plr1Name)
        } 
        if(Plr2Score > Plr1Score){
            localStorage.setItem("Winner",Plr2Name)
        }
        if (Plr1Score == Plr2Score){
            localStorage.setItem("Winner", "Tie")
        }
        localStorage.setItem("P1Score",Plr1Score)
        localStorage.setItem("P2Score",Plr2Score)
    }
}

function UpdateDisplay(){
    if (Answer_Turn == "P1"){
        Plr1Role = "Answer Turn"
        Plr2Role = "Question Turn"
    }
    else{
        Plr1Role = "Question Turn"
        Plr2Role = "Answer Turn"
    }

    console.log(Answer_Turn, Question_Turn)
    document.getElementById("Round_display").innerHTML = "Round: "+ RoundNum + "/" + Num_of_rounds
    document.getElementById("player1_display").innerHTML = Plr1Name +":"+ Plr1Score+"("+Plr1Role+")"
    document.getElementById("player2_display").innerHTML = Plr2Name +":"+ Plr2Score+"("+Plr2Role+")"
}


function CorrectAnswer(Plr){
    if (Plr == "P1"){
        document.getElementById("Notice").innerHTML = Plr1Name + " got it right!"
    }
    else{
        document.getElementById("Notice").innerHTML = Plr2Name + " got it right!"
    }

}

function GiveSymbol(Operation){
    if (Operation == "addition")
    {
        return "+"
    }
    if (Operation == "subtraction"){
        return "-"
    }
    if (Operation == "multiplication"){
        return "x"
    }
    if (Operation == "division"){
        return "/"
    }
}




function Send(){
    UpdateDisplay();
    Number1 = parseInt(document.getElementById("FirstNum").value);
    Number2 = parseInt(document.getElementById("SecondNum").value);
    Operation = document.getElementById("Operation").value;
    Operation = Operation.toLowerCase();
    Answer = 0
    document.getElementById("FirstNum").value = ""
    document.getElementById("SecondNum").value = ""
    document.getElementById("Operation").value = ""
    if (['addition','subtraction','multiplication','division'].includes(Operation) == true){
        document.getElementById("Notice").innerHTML = ""

    if (Operation == "addition"){
        Answer = Number1 + Number2;
    }
    if (Operation == "subtraction"){
        Answer = Number1 - Number2;
    }
    if (Operation == "multiplication"){
        Answer = Number1 * Number2;
    }
    if (Operation == "division"){
        Answer = Number1/Number2;
    }
    

    console.log(Operation);
    console.log(Number1);
    console.log(Number2);
    console.log(Answer);
    center1 = "<center>"
    question = "<h4 id='question'> Q." + Number1.toString() + GiveSymbol(Operation) + Number2.toString() + "</h4>";
    InsertAnswer = "<br> Answer: <input type='text' id='player_answer'>";
    check_button = "<br><br><button onclick='check()'>Check</button>";
    Seperator = "<br><br><br>";
    center2 = "</center>"

    row = center1+question + InsertAnswer + check_button + Seperator+center2;
    document.getElementById("Answer_section").innerHTML = row;
 }
 else{
    document.getElementById("Notice").innerHTML = "PLEASE USE A VALID OPERATION"
 }
}

function check(){
    
    PlrAnswer = document.getElementById('player_answer').value;
    if (PlrAnswer == Answer){
        if (Answer_Turn == "P1"){
            Plr1Score += 1;
            CorrectAnswer("P1");
            Answer_Turn = "P2";
            Question_Turn = "P1";
        }
        else{
            Plr2Score += 1;
            CorrectAnswer("P2");
            Answer_Turn = "P1";
            Question_Turn = "P2";
            RoundNum += 1;
        }
    }
    else
    {
        document.getElementById("Notice").innerHTML = "The answers was: "+ Answer
        console.log("Answer:" + toString(Answer))
        if (Answer_Turn == "P1"){
            
            Answer_Turn = "P2";
            Question_Turn = "P1";
        }
        else{
            Answer_Turn = "P1";
            Question_Turn = "P2";
            RoundNum += 1;
        }
    }
    document.getElementById("Answer_section").innerHTML = "";
    
    CheckToEnd();
    UpdateDisplay();
}