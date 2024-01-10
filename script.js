
function checkAnswer() {
    var userAnswer = document.getElementById('answer').value;
    var result = document.getElementById('result');
    if (userAnswer === '干物') {
        result.textContent = 'おめでとう、正解';
    } else {
        result.textContent = '残念、不正解';
    }
}
