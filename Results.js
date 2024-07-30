Winner = localStorage.getItem("Winner");

P1Name = localStorage.getItem("P1Name");
P1Score = localStorage.getItem("P1Score");

P2Name = localStorage.getItem("P2Name")
P2Score = localStorage.getItem("P2Score")

console.log(Winner, P1Name, P1Score, P2Name, P2Score)

function ShowResults(){
 if (Winner == "Tie"){
    document.getElementById("Winners_html").innerHTML= "It was a tie!";
 }else{
    document.getElementById("Winners_html").innerHTML= "The winner is..." + Winner;
 }


  document.getElementById("P1Results").innerHTML = P1Name + ":" + P1Score
  document.getElementById("P2Results").innerHTML = P2Name + ":" + P2Score
}

function Restart(){
    window.location = "index.html"
}