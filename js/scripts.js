function firstRule() {
    //Rule: words begining with vowel get way added to end
    //ex: okay becomes okayway
}

function secondRule() {
    //Rule: Words with 1 or more consonants get first consenantes pushed to 
    //      end + ay
    //ALSO: If ends with q and a u, then also move the u.
    //ex: code becomes odecay, quick becomes ickquay
}


function translateToPigLatin() {
    e.preventDefault();
    const input = document.querySelector("input").value;
    let words = input.split(" ");
    firstRule(words);
    secondRule(words);
    thirdRule(words);
}

window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        translateToPigLatin();
        
    });
});