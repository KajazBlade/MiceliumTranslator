window.Translator = {
    toMicelium(text) {
        return text.split('').map(char => {
            const lowerChar = char.toLowerCase();
            return window.MICELIUM_MAP[lowerChar] || char;
        }).join('');
    },
    fromMicelium(text) {
        let result = text;
        for (const [emoji, char] of Object.entries(window.REVERSE_MAP)) {
            result = result.split(emoji).join(char);
        }
        return result;
    }
};