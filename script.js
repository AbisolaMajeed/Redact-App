document.getElementById("redactBtn").addEventListener("click", function() {

    let text = document.getElementById("originalText").value;
    let wordsToRedact = document.getElementById("wordsToRedact").value.split(' ');

    let redactedText = customRedact(text, wordsToRedact);
    document.getElementById("textOutputField").innerHTML = redactedText;
});

function customRedact(text, wordsToRedact) {

    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        for (const word of wordsToRedact) {
            if (words[i].toLowerCase() === word.toLowerCase()) {
                words[i] = '***';
            }
        }
    }
    
    return words.join(' ');
}