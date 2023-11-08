document.getElementById("redactBtn").addEventListener("click", function() {

    let text = document.getElementById("originalText").value;
    let wordsToRedact = document.getElementById("wordsToRedact").value.split(' ');
    let redactText =  document.getElementById("redactText").value;

    let redactedText = customRedact(text, wordsToRedact, redactText);
    document.getElementById("textOutputField").innerHTML = redactedText;
});

function customRedact(text, wordsToRedact, redactText) {

    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        for (const word of wordsToRedact) {
            if (words[i].toLowerCase() === word.toLowerCase()) {
                words[i] = redactText;
            }
        }
    }
    
    return words.join(' ');
}