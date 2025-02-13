  // Função para converter Celsius para Fahrenheit
  function convertCelsius() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const resultCelsius = document.getElementById('resultCelsius');

    if (isNaN(celsius)) {
        resultCelsius.textContent = 'Por favor, insira um valor válido.';
        resultCelsius.style.color = 'red';
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    resultCelsius.textContent = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
}

// Função para converter Metros para Centímetros
function convertMetros() {
    const metros = parseFloat(document.getElementById('metros').value);
    const resultMetros = document.getElementById('resultMetros');

    if (isNaN(metros)) {
        resultMetros.textContent = 'Por favor, insira um valor válido.';
        resultMetros.style.color = 'red';
        return;
    }

    const centimetros = metros * 100;
    resultMetros.textContent = `${metros} metros é igual a ${centimetros.toFixed(2)} centímetros`;
}

// Função para converter Quilos para Libras
function convertQuilos() {
    const quilos = parseFloat(document.getElementById('quilos').value);
    const resultQuilos = document.getElementById('resultQuilos');

    if (isNaN(quilos)) {
        resultQuilos.textContent = 'Por favor, insira um valor válido.';
        resultQuilos.style.color = 'red';
        return;
    }

    const libras = quilos * 2.20462;
    resultQuilos.textContent = `${quilos} quilos é igual a ${libras.toFixed(2)} libras`;
}

// Função para resetar os campos
function resetForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('metros').value = '';
    document.getElementById('quilos').value = '';
    document.getElementById('resultCelsius').textContent = '';
    document.getElementById('resultMetros').textContent = '';
    document.getElementById('resultQuilos').textContent = '';
}