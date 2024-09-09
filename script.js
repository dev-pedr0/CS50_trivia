function showAnswer() {
    document.getElementById('anwser').style.display = "block";
    setTimeout(() => {
        document.getElementById('anwser').style.display = "none";
        }, 2000);
}

function checkAnwser() {
    const text = document.getElementById('text-anwser').value.toLowerCase();;
    const sentence = "new zealand";
    if (text.includes(sentence)) {
        document.getElementById('result').innerText = "Right!";
        document.getElementById('result').style.backgroundColor = "green";
    } else {
        document.getElementById('result').innerText = "Wrong!";
        document.getElementById('result').style.backgroundColor = "red";
    }
}

