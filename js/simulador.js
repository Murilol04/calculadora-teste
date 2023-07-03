function simular() {
    const taxaPraticada = document.getElementById('taxaPraticada').value;
    const valorReceber = document.getElementById('valorReceber').value;
    const resultados = document.getElementById('resultadosSimulador')
    const valorCobrado = (valorReceber/ (1 - taxaPraticada/100));
    resultados.innerHTML ='Valor a ser Cobrado: ' + valorCobrado.toFixed(2) + ' Reais';
}
