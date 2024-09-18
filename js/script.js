document.getElementById('welcome-button').onclick = function() {
    const name = document.getElementById('name-input').value; // Obtém o nome do usuário do campo de entrada
    if (name) {
        const message = `Bem-vindo, ${name}! Espero que você esteja tendo um ótimo dia!`;
        document.getElementById('welcome-message').innerText = message;
    } else {
        document.getElementById('welcome-message').innerText = "Por favor, digite seu nome.";
    }
}
