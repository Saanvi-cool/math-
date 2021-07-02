var score=0;

function Update(){
score=score+1;
document.getElementById("score").innerHTML=score;
}

function Save(){
    localStorage.setItem("score_key",score);
}

function Next(){
    window.location="activity_2.html";
}
function send(){
   number1=document.getElementById("n1").value;
   number2=document.getElementById("n2").value;
   actual_answer=parseInt(number1)*parseInt(number2);
   question_number="<h4>"+number1+"X"+number2+"<h4>";
   input_box="<br>Answer:<input type='text' id='input_check_box'>";
   check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row=question_number+input_box+check_button;
   document.getElementById("output").innerHTML=row;



}
function check(){
get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answerTurn=="p1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player1_score;
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player2_score;
        }
    }
    if(questionTurn=="p1"){
        questionTurn="p2";
        document.getElementById("player_question").innerHTML="Question Turn:"+player_2_name;
        
    }
    else{
        questionTurn="p1";
        document.getElementById("player_answer").innerHTML="Answer Turn:"+player_1_name;
    }
    document.getElementById("output").innerHTML="";
}   


