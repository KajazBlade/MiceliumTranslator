document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userInput');
    const output = document.getElementById('outputDisplay');
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');

    encodeBtn.onclick = () => {
        output.innerText = window.Translator.toMicelium(input.value) || "_";
    };

    decodeBtn.onclick = () => {
        output.innerText = window.Translator.fromMicelium(input.value) || "_";
    };
});