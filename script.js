// scripts.js

const characters = [
    { character: '你', pinyin: 'nǐ', plainPinyin: 'ni', tone: '3', meaning: 'You' },
    { character: '好', pinyin: 'hǎo', plainPinyin: 'hao', tone: '3', meaning: 'Good' },
    { character: '是', pinyin: 'shì', plainPinyin: 'shi', tone: '4', meaning: 'Is' },
    { character: '我', pinyin: 'wǒ', plainPinyin: 'wo', tone: '3', meaning: 'I' },
    { character: '在', pinyin: 'zài', plainPinyin: 'zai', tone: '4', meaning: 'At' },
    { character: '有', pinyin: 'yǒu', plainPinyin: 'you', tone: '3', meaning: 'Have' },
    { character: '这', pinyin: 'zhè', plainPinyin: 'zhe', tone: '4', meaning: 'This' },
    { character: '会', pinyin: 'huì', plainPinyin: 'hui', tone: '4', meaning: 'Can' },
    { character: '的', pinyin: 'de', plainPinyin: 'de', tone: '0', meaning: 'Of' },
    { character: '不', pinyin: 'bù', plainPinyin: 'bu', tone: '4', meaning: 'Not' }
];

let currentCharacter;

function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function showCharacter() {
    currentCharacter = getRandomCharacter();
    document.getElementById('character-display').innerHTML = currentCharacter.character;
    document.getElementById('pinyin-input').value = '';
    document.getElementById('tone-selector').value = '0';
    document.getElementById('feedback').innerHTML = '';
}

function checkPinyin() {
    const userInput = document.getElementById('pinyin-input').value.trim().toLowerCase();
    const selectedTone = document.getElementById('tone-selector').value;

    if (userInput === currentCharacter.plainPinyin && selectedTone === currentCharacter.tone) {
        document.getElementById('feedback').innerHTML = 'Correct! ' + currentCharacter.character + ' (' + currentCharacter.pinyin + '): ' + currentCharacter.meaning;
    } else {
        document.getElementById('feedback').innerHTML = 'Incorrect. Try again!';
    }
}

// Initial character display
document.addEventListener("DOMContentLoaded", showCharacter);
