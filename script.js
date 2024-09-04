// scripts.js

const characters = [
    { character: '你', pinyin: 'nǐ', plainPinyin: 'ni', meaning: 'Bạn', sinoVietnamese: 'Nhĩ' },
    { character: '好', pinyin: 'hǎo', plainPinyin: 'hao', meaning: 'Tốt', sinoVietnamese: 'Hảo' },
    { character: '是', pinyin: 'shì', plainPinyin: 'shi', meaning: 'Là', sinoVietnamese: 'Thị' },
    { character: '我', pinyin: 'wǒ', plainPinyin: 'wo', meaning: 'Tôi', sinoVietnamese: 'Ngã' },
    { character: '在', pinyin: 'zài', plainPinyin: 'zai', meaning: 'Ở', sinoVietnamese: 'Tại' },
    { character: '有', pinyin: 'yǒu', plainPinyin: 'you', meaning: 'Có', sinoVietnamese: 'Hữu' },
    { character: '这', pinyin: 'zhè', plainPinyin: 'zhe', meaning: 'Đây', sinoVietnamese: 'Giá' },
    { character: '会', pinyin: 'huì', plainPinyin: 'hui', meaning: 'Có thể', sinoVietnamese: 'Hội' },
    { character: '的', pinyin: 'de', plainPinyin: 'de', meaning: 'Của', sinoVietnamese: 'Đích' },
    { character: '不', pinyin: 'bù', plainPinyin: 'bu', meaning: 'Không', sinoVietnamese: 'Bất' }
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
    document.getElementById('feedback').innerHTML = '';
}

function checkPinyin() {
    const userInput = document.getElementById('pinyin-input').value.trim().toLowerCase();

    if (userInput === currentCharacter.plainPinyin) {
        document.getElementById('feedback').innerHTML = `
            Chính xác! ${currentCharacter.character} (${highlightTones(currentCharacter.pinyin)}): 
            ${currentCharacter.meaning} <br> 
            Âm Hán Việt: ${currentCharacter.sinoVietnamese}
        `;
    } else {
        document.getElementById('feedback').innerHTML = `
            Sai. Chữ đúng là: ${currentCharacter.character} (${highlightTones(currentCharacter.pinyin)}) <br> 
            Âm Hán Việt: ${currentCharacter.sinoVietnamese}
        `;
    }
}

function highlightTones(pinyin) {
    return pinyin
        .replace(/nǐ/g, '<span class="tone">nǐ</span>')
        .replace(/hǎo/g, '<span class="tone">hǎo</span>')
        .replace(/shì/g, '<span class="tone">shì</span>')
        .replace(/wǒ/g, '<span class="tone">wǒ</span>')
        .replace(/zài/g, '<span class="tone">zài</span>')
        .replace(/yǒu/g, '<span class="tone">yǒu</span>')
        .replace(/zhè/g, '<span class="tone">zhè</span>')
        .replace(/huì/g, '<span class="tone">huì</span>')
        .replace(/de/g, '<span class="tone">de</span>')
        .replace(/bù/g, '<span class="tone">bù</span>');
}

// Initial character display
document.addEventListener("DOMContentLoaded", showCharacter);
