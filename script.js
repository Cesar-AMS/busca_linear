function buscaLinear(lista, alvo) {
    console.log('Lista:', lista);
    console.log('Alvo:', alvo);
    for (let i = 0; i < lista.length; i++) {
        console.log('Verificando:', lista[i]);
        if (lista[i] === alvo) {
            console.log('Número encontrado no índice:', i);
            return i; // Retorna o índice se o número for encontrado
        }
    }
    console.log('Número não encontrado na lista');
    return -1; // Retorna -1 se o número não for encontrado
}

function executarBusca() {
    const numerosInput = document.getElementById('numero').value;
    const alvoInput = document.getElementById('alvo').value;

    // Converte a entrada do usuário em um array de números
    const numeros = numerosInput.split(',').map(num => parseInt(num.trim()));

    // Converte a entrada do alvo para número
    const alvo = parseInt(alvoInput.trim());

    console.log('Números:', numeros);
    console.log('Alvo:', alvo);

    const indice = buscaLinear(numeros, alvo);

    const resultadoElement = document.getElementById('resultado');
    if (indice !== -1) {
        resultadoElement.textContent = `O número ${alvo} foi encontrado no índice ${indice} da lista.`;
    } else {
        resultadoElement.textContent = `O número ${alvo} não foi encontrado na lista.`;
    }
}
