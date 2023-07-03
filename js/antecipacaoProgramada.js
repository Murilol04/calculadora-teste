function calcularProgramada() {
    const resultados = document.getElementById('resultadosAntecipacaoProgramada')
    var d = document.getElementById('dataVenda').value;
    var [ano, mes, dia] = d.split('-').map(Number);
    resultados.innerHTML = '<p>Ano escolhido: ' + ano + '</p> <br>' + '<p> Mês escolhido: ' + mes + '</p> <br>' + '<p> Dia escolhido: ' + dia + '</p> <br>';
}
function calcularTaxaProgramada() {
    const resultados = document.getElementById('resultadosAntecipacaoProgramada')
    const contadorChecked = document.querySelectorAll('.dias-semana__botao:checked').length;
    var ravResultante, diaProporcional;
    var datasProgramadas = new Array(contadorChecked);
    var d = document.getElementById('dataVenda').value;
    var [ano, mes, dia] = d.split('-').map(Number);
    var contador = 0;
    const taxaRav = parseFloat(document.getElementById('taxaAntecipacao').value);
    resultados.innerHTML = '';
    for (var i = 1; i < 31; i++) {

        if (document.getElementById('diasSemana' + i + '').checked) {
            datasProgramadas[contador] = i;
            contador++;
        }
    }

    for (let j = 0; j <= contadorChecked - 1; j++) {
        if (dia < datasProgramadas[j]) {
            diaProporcional = 31 - (datasProgramadas[j] - dia);
            if (diaProporcional < 0) {
                diaProporcional = 0;
            }
            ravResultante = (taxaRav / 30) * (diaProporcional);
            j = contadorChecked;
        }


    }
    if (dia >= datasProgramadas[contadorChecked - 1]) {
        if (mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
            diaProporcional = 30 - (31 - dia + datasProgramadas[0]);
            if (diaProporcional < 0) {
                diaProporcional = 0;
            }
            ravResultante = (taxaRav / 30) * diaProporcional;

        }
        else {
            if (ano % 4 == 0 && mes == 1) {
                diaProporcional = 30 - (29 - dia + datasProgramadas[0]);
                if (diaProporcional < 0) {
                    diaProporcional = 0;
                }
                ravResultante = (taxaRav / 30) * diaProporcional;

            }
            else {
                if (ano % 4 !== 0 && mes == 1) {
                    diaProporcional = 30 - (28 - dia + datasProgramadas[0]);
                    if (diaProporcional < 0) {
                        diaProporcional = 0;
                    }
                    ravResultante = (taxaRav / 30) * diaProporcional;
                }
            }
            if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
                diaProporcional = 30 - (30 - dia + datasProgramadas[0]);
                if (diaProporcional < 0) {
                    diaProporcional = 0;
                }
                ravResultante = (taxaRav / 30) * diaProporcional;

            }
        }
    }

    var taxa = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]];
    const taxaMdrDebito = parseFloat(document.getElementById('taxaMdrDebito').value);
    const taxaMdrCreditoAvista = parseFloat(document.getElementById('taxaMdrCreditoAvista').value);
    const taxaMdrCredito2a6 = parseFloat(document.getElementById('taxaMdrCredito2a6').value);
    const taxaMdrCredito7a18 = parseFloat(document.getElementById('taxaMdrCredito7a18').value);
    var contadorCalculadora = 0;

    for (var l = 0; l < 18; l++) {
        contadorCalculadora += 1 * l + 1;
        if (l == 0) {
            Mdr = taxaMdrCreditoAvista;

        }
        else {
            if (l > 0 && l < 6) {

                Mdr = taxaMdrCredito2a6;


            }
            else {
                Mdr = taxaMdrCredito7a18;
            }

        }

        Antecipacao = ravResultante;


        taxa[l] = ((100 - Mdr) / (l + 1)) * ((Antecipacao / 100) * contadorCalculadora) + Mdr;


    }

    resultados.innerHTML = `
<h2 class="resultados__titulo"> Stone </h2>
<p class="resultados__texto">Débito: ${taxaMdrDebito.toFixed(2)}%</p>
<p class="resultados__texto">1x: ${taxa[0].toFixed(2)}%</p>
<p class="resultados__texto">2x: ${taxa[1].toFixed(2)}%</p>
<p class="resultados__texto">3x: ${taxa[2].toFixed(2)}%</p>
<p class="resultados__texto">4x: ${taxa[3].toFixed(2)}%</p>
<p class="resultados__texto">5x: ${taxa[4].toFixed(2)}%</p>
<p class="resultados__texto">6x: ${taxa[5].toFixed(2)}%</p>
<p class="resultados__texto">7x: ${taxa[6].toFixed(2)}%</p>
<p class="resultados__texto">8x: ${taxa[7].toFixed(2)}%</p>
<p class="resultados__texto">9x: ${taxa[8].toFixed(2)}%</p>
<p class="resultados__texto">10x: ${taxa[9].toFixed(2)}%</p>
<p class="resultados__texto">11x: ${taxa[10].toFixed(2)}%</p>
<p class="resultados__texto">12x: ${taxa[11].toFixed(2)}%</p>
<p class="resultados__texto">13x: ${taxa[12].toFixed(2)}%</p>
<p class="resultados__texto">14x: ${taxa[13].toFixed(2)}%</p>
<p class="resultados__texto">15x: ${taxa[14].toFixed(2)}%</p>
<p class="resultados__texto">16x: ${taxa[15].toFixed(2)}%</p>
<p class="resultados__texto">17x: ${taxa[16].toFixed(2)}%</p> 
<p class="resultados__texto">18x: ${taxa[17].toFixed(2)}%</p> 
`;
}




