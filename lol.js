var player_1_name="";
var player_2_name="";

function login(){
    player_1_name=document.getElementById("player_1_name").value;
    player_2_name=document.getElementById("player_2_name").value;
    localStorage.setItem("player1_key",player_1_name);
    localStorage.setItem("player2_key",player_2_name);
    window.location="game.html";
}