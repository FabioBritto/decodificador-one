// Função para verificar caracteres inválidos
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

// Função para criptografar o texto
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

// Função para lidar com o botão de criptografia
function processarTexto(operacao) {
    const textoInput = document.getElementById('texto').value;
    const resultadoOutput = document.getElementById('resultado');
    const erroOutput = document.getElementById('erro');

    // Verifica se o texto contém caracteres inválidos
    const erro = verificarTexto(textoInput);
    if (erro) {
        resultadoOutput.value = '';
        erroOutput.textContent = erro;
        return;
    }

    // Limpa mensagem de erro
    erroOutput.textContent = '';

    if (operacao === 'criptografar') {
        resultadoOutput.value = criptografar(textoInput);
    } else if (operacao === 'descriptografar') {
        resultadoOutput.value = descriptografar(textoInput);
    }
}

// Adiciona o evento ao botão para processar o texto
document.getElementById('texto-crip').addEventListener('click', () => processarTexto('criptografar'));
document.getElementById('texto-descrip').addEventListener('click', () => processarTexto('descriptografar'));
