var P1Name = ""
var P2Name = ""

function GetNames(){
    P1Name = document.getElementById("P1Name").value;
    P2Name = document.getElementById("P2Name").value;
    console.log(P1Name, P2Name)
    localStorage.setItem("P1Name",P1Name)
    localStorage.setItem("P2Name",P2Name)
    if (document.getElementById("Num_of_rounds").value == "")
    {
        localStorage.setItem("Rounds", 5)
    }else{
        localStorage.setItem("Rounds",document.getElementById("Num_of_rounds").value)
    }


    window.location = "Game.html"
}