function firstRule(words) {
    //Rule: words begining with vowel get way added to end
    //ex: okay becomes okayway
    let output = [];
    words.forEach(function(word) {
        if(word.search(/[aeiou]/) === 0) {
            output.push(word + "way");
        } else {
            output.push(word);
        }
    });
    return output;
}

function secondRule(words) {
    //Rule: Words with 1 or more consonants get first consenantes pushed to 
    //      end + ay
    //ALSO: If ends with q and a u, then also move the u.
    //ex: code becomes odecay, quick becomes ickquay
    let output = [];
    words.forEach(function(word) {
        let array = word.split("");
        let cons = [];
        for(let i = 0; i < array.length; i++) {
            if(array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "u" || array[i] === "o") {
               break; 
            } else {
                cons.push(array[i]);
            }
        }
        if(cons[cons.length-1] === "q" && array[cons.length] === "u") {
            cons.push("u");
        }
        output.push(array.slice(cons.length).join("") + cons.join("") + "ay");
    });
    return output;
}


function translateToPigLatin(e) {
    e.preventDefault();
    const input = document.querySelector("input").value;
    let words = input.split(" ");
    return secondRule(firstRule(words)).join(" ");
}

window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        let p = document.createElement("p");
        p.append("Translation: " + translateToPigLatin(e));
        document.querySelector("body").append(p);
    });
});