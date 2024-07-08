document.getElementById('encryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    if (inputText) {
        let encryptedText = encryptText(inputText);
        displayMessage(encryptedText);
    } else {
        alert('Por favor, ingresa texto para encriptar');
    }
});

document.getElementById('decryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    if (inputText) {
        let decryptedText = decryptText(inputText);
        displayMessage(decryptedText);
    } else {
        alert('Por favor, ingresa texto para desencriptar');
    }
});

function encryptText(text) {
    return text.replace(/[aeiou]/g, function(char) {
        switch(char) {
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'a':
                return 'ai';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return char;
        }
    });
}

function decryptText(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        switch(match) {
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ai':
                return 'a';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return match;
        }
    });
}

function displayMessage(message) {
    // Mostrar solo el texto encriptado/desencriptado
    document.getElementById('messageText').textContent = message;
    // Ocultar la imagen y el mensaje inicial
    document.querySelector('.message img').style.display = 'none';
    document.querySelector('.message p:first-of-type').style.display = 'none';
    // Mostrar el mensaje cifrado/descifrado
    document.getElementById('messageText').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
}

document.getElementById('copyButton').addEventListener('click', function() {
    let messageText = document.getElementById('messageText');
    let range = document.createRange();
    range.selectNode(messageText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Copiado al portapapeles');
});
