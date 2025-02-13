function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');
    const classificationElement = document.getElementById('classification');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.textContent = 'Por favor, insira valores válidos.';
        resultElement.style.color = 'red';
        return;
    }

    const imc = weight / (height * height);
    resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        classificationElement.textContent = 'Classificação: Abaixo do peso';
        classificationElement.className = 'classification below';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificationElement.textContent = 'Classificação: Peso normal';
        classificationElement.className = 'classification normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificationElement.textContent = 'Classificação: Sobrepeso';
        classificationElement.className = 'classification overweight';
    } else {
        classificationElement.textContent = 'Classificação: Obesidade';
        classificationElement.className = 'classification obesity';
    }
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('classification').textContent = '';
}