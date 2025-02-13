let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById("guess").value;
    const messageDiv = document.getElementById("message");

    if (userGuess == "") {
        messageDiv.textContent = "Por favor, digite um número!";
        messageDiv.style.color = "red";
        return;
    }

    attempts++;
    
    if (userGuess == randomNumber) {
        messageDiv.textContent = `Parabéns! Você acertou em ${attempts} tentativas!`;
        messageDiv.style.color = "green";
    } else if (userGuess > randomNumber) {
        messageDiv.textContent = "O número é menor. Tente novamente!";
        messageDiv.style.color = "orange";
    } else {
        messageDiv.textContent = "O número é maior. Tente novamente!";
        messageDiv.style.color = "orange";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("guess").value = "";
    document.getElementById("message").textContent = "";
}