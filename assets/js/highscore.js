const highScoreList = document.getElementById("highscore-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [] ;
const clearScores = document.getElementById("clear");

console.log(highScores);
highScoreList.innerHTML = highScores
    .map(newScore => {
        return `<li class="high-score">${newScore.initials}-${newScore.score}</li>`
    }) 
    .join("");

// clearScores.addEventListener("click", clear());

// function clear() {
//     localStorage.clear();
// }