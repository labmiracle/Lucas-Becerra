function camelize(str) {
    const words = str.toLowerCase().split('');
    const camelWords = words.map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return camelWords.join ('');
}

console.assert(camelize('Buenos días a todos'))