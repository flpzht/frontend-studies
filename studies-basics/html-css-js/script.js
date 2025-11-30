// JavaScript ES6+ e Manipulação do DOM

const targetElement = document.getElementById('target');
const changeButton = document.getElementById('changeButton');

let count = 0;

function updateText() {
    count++;
    targetElement.textContent = `O texto foi alterado ${count} vezes!`;
    console.log(`Nova contagem: ${count}`);
}

// Adiciona um listener de evento ao botão
changeButton.addEventListener('click', updateText);

// Exemplo de função assíncrona (ES8)
async function fetchData() {
    try {
        // Simulação de chamada de API
        const response = await new Promise(resolve => setTimeout(() => resolve({ data: "Dados Assíncronos Carregados" }), 1000));
        console.log("Resultado da Promise:", response.data);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

fetchData();