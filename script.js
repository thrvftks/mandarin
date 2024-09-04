// scripts.js

function showDetails(character, pinyin, meaning) {
    document.getElementById('details').innerHTML = 
        '<h2>' + character + '</h2>' + 
        '<p>Pinyin: ' + pinyin + '</p>' + 
        '<p>Meaning: ' + meaning + '</p>';
}
