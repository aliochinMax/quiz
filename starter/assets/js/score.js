var highscores = JSON.parse(localStorage.getItem("highscores"));
var orderedListEl = document.getElementById("highscores");
var clearButtonEl = document.getElementById("clear");
if(highscores != null){
    highscores.forEach(function(initals_score){
        var listEl = document.createElement("li");
        listEl.textContent = initals_score[0].toUpperCase() + ": " + initals_score[1]; 
        orderedListEl.appendChild(listEl);
    })
}
clearButtonEl.addEventListener("click",function(event){
    orderedListEl.innerHTML = "";
    localStorage.setItem("highscores", "null");
})