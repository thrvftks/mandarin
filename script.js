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

let currentCharacter = null;

function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function showCharacter() {
    currentCharacter = getRandomCharacter();
    document.getElementById('character-display').innerHTML = currentCharacter.character;
    document.getElementById('pinyin-input').value = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('nextButton').style.display = 'none';
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

    document.getElementById('nextButton').style.display = 'block';
}

function highlightTones(pinyin) {
    return pinyin.replace(/([āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])/g, '<span class="tone">$1</span>');
}

document.addEventListener("DOMContentLoaded", showCharacter);
