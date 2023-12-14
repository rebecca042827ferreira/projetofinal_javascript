function somar() {
    const numero1 = parseFloat(document.getElementById("numero1Soma").value);
    const numero2 = parseFloat(document.getElementById("numero2Soma").value);
   
    // Verifica se ambos os valores são números
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Realiza a soma
        const resultado = numero1 + numero2;

        // Atualiza o conteúdo HTML com o resultado
        document.getElementById("resultadoSoma").innerHTML = "Resultado da soma: " + resultado;
    } else {
        // Se algum dos valores não for um número, exibe uma mensagem de erro
        document.getElementById("resultadoSoma").innerHTML = "Por favor, insira números válidos.";
    }
}



function subtrair() {
    const numero1 = parseFloat(document.getElementById("numero1Sub").value);
    const numero2 = parseFloat(document.getElementById("numero2Sub").value);
    // evite mexer no código acima!

    // Verifica se ambos os valores são números
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Realiza a subtração
        const resultado = numero1 - numero2;

        // Atualiza o conteúdo HTML com o resultado
        document.getElementById("resultadoSub").innerHTML = "Resultado da subtração: " + resultado;
    } else {
        // Se algum dos valores não for um número, exibe uma mensagem de erro
        document.getElementById("resultadoSub").innerHTML = "Por favor, insira números válidos.";
    }
}


function multiplicar() {
    const numero1 = parseFloat(document.getElementById("numero1Mult").value);
    const numero2 = parseFloat(document.getElementById("numero2Mult").value);
    // evite mexer no código acima!

    // Verifica se ambos os valores são números
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Realiza a multiplicação
        const resultado = numero1 * numero2;

        // Atualiza o conteúdo HTML com o resultado
        document.getElementById("resultadoMult").innerHTML = "Resultado da multiplicação: " + resultado;
    } else {
        // Se algum dos valores não for um número, exibe uma mensagem de erro
        document.getElementById("resultadoMult").innerHTML = "Por favor, insira números válidos.";
    }
}


function dividir() {
    const numero1 = parseFloat(document.getElementById("numero1Div").value);
    const numero2 = parseFloat(document.getElementById("numero2Div").value);
    // evite mexer no código acima!

    // Verifica se ambos os valores são números e se o divisor não é zero
    if (!isNaN(numero1) && !isNaN(numero2) && numero2 !== 0) {
        // Realiza a divisão
        const resultado = numero1 / numero2;

        // Atualiza o conteúdo HTML com o resultado
        document.getElementById("resultadoDiv").innerHTML = "Resultado da divisão: " + resultado;
    } else {
        // Se algum dos valores não for um número ou o divisor for zero, exibe uma mensagem de erro
        document.getElementById("resultadoDiv").innerHTML = "Por favor, insira números válidos e certifique-se de que o divisor não seja zero.";
    }
}
