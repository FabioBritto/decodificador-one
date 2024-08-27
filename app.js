// Aqui eu verifico se existe algum caracter que não pode ser usado. Se for o caso, ele
// informa ao usuário e não realiza a criptografia
function verificarTexto(texto) {
    const temMaiuscula = /[A-Z]/.test(texto);
    const temAcento = /[áéíóúãõâêîôûàèìòù]/.test(texto);
    const temCaracterEspecial = /[^a-z\s]/.test(texto);

    if (temMaiuscula) {
        return 'O texto não pode conter letras maiúsculas.';
    }
    if (temAcento) {
        return 'O texto não pode conter acentos.';
    }
    if (temCaracterEspecial) {
        return 'O texto não pode conter caracteres especiais.';
    }
    return null;
}

// Função que criptografa o texto
function criptografar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function descriptografar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função chamada quando clico no botão pra criptografar ou descriptografar.
// Ele recebe esse "operacao" como parâmetro, que é a informação de qual botão que chamou
function processarTexto(operacao) {
    const textoInput = document.getElementById('texto').value;
    const resultadoOutput = document.getElementById('resultado');
    const erroOutput = document.getElementById('erro');

    // Chama a função de verificação dos caracters
    const erro = verificarTexto(textoInput);
    if (erro) {
        resultadoOutput.value = '';
        erroOutput.textContent = erro;
        return;
    }

    // Limpa a mensagem de erro
    erroOutput.textContent = '';

    if (operacao === 'criptografar') {
        resultadoOutput.value = criptografar(textoInput);
    } else if (operacao === 'descriptografar') {
        resultadoOutput.value = descriptografar(textoInput);
    }
}

// Aqui é adicionado o evento que faz todo o processamento do texto quando eu clico no botão
document.getElementById('texto-crip').addEventListener('click', () => processarTexto('criptografar'));
document.getElementById('texto-descrip').addEventListener('click', () => processarTexto('descriptografar'));
