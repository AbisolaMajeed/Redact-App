document.getElementById("redactBtn").addEventListener("click", function() {

    let text = document.getElementById("originalText").value;
    let wordsToRedact = document.getElementById("wordsToRedact").value;

    document.getElementById("textOutputField").innerHTML = customRedact(text, wordsToRedact);

    return customRedact(text, wordsToRedact)
});

function customRedact(text, wordsToRedact) {

    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        for (const word of wordsToRedact) {
            if (words[i].toLowerCase() === word.toLowerCase()) {
                words[i] = '***'; // if there’s a third parameter, you can use it here
            }
        }
    }
    
    return words.join(' ');
}


