const characters = [
    { character: '你', pinyin: 'nǐ', plainPinyin: 'ni', meaning: 'bạn (ngôi thứ 2)', sinoVietnamese: 'nhĩ', isTraditional: true },
    { character: '好', pinyin: 'hǎo', plainPinyin: 'hao', meaning: 'tốt', sinoVietnamese: 'hảo', isTraditional: true },
    { character: '是', pinyin: 'shì', plainPinyin: 'shi', meaning: 'là', sinoVietnamese: 'thị', isTraditional: true },
    { character: '我', pinyin: 'wǒ', plainPinyin: 'wo', meaning: 'tôi', sinoVietnamese: 'ngã', isTraditional: true },
    { character: '这', pinyin: 'zhè', plainPinyin: 'zhe', meaning: 'đây', sinoVietnamese: 'giá', isTraditional: false },
    { character: '這', pinyin: 'zhè', plainPinyin: 'zhe', meaning: 'đây', sinoVietnamese: 'giá', isTraditional: true },
    { character: '的', pinyin: 'de', plainPinyin: 'de', meaning: 'của', sinoVietnamese: 'đích', isTraditional: true },
    { character: '不', pinyin: 'bù', plainPinyin: 'bu', meaning: 'không', sinoVietnamese: 'bất', isTraditional: true },
    { character: '嗎', pinyin: 'ma', plainPinyin: 'ma', meaning: 'trợ từ nghi vấn (gì thế, hả)', sinoVietnamese: 'ma', isTraditional: true },
    { character: '吗', pinyin: 'ma', plainPinyin: 'ma', meaning: 'trợ từ nghi vấn (gì thế, hả)', sinoVietnamese: 'ma', isTraditional: false },
    { character: '謝謝', pinyin: 'xièxiè', plainPinyin: 'xiexie', meaning: 'cảm ơn', sinoVietnamese: 'tạ tạ', isTraditional: true },
    { character: '谢谢', pinyin: 'xièxiè', plainPinyin: 'xiexie', meaning: 'cảm ơn', sinoVietnamese: 'tạ tạ', isTraditional: false },
    { character: '歡迎', pinyin: 'huānyíng', plainPinyin: 'huanying', meaning: 'hoan nghênh, chào mừng', sinoVietnamese: 'hoan nghênh', isTraditional: true },
    { character: '欢迎', pinyin: 'huānyíng', plainPinyin: 'huanying', meaning: 'hoan nghênh, chào mừng', sinoVietnamese: 'hoan nghênh', isTraditional: false },
    { character: '他', pinyin: 'tā', plainPinyin: 'ta', meaning: 'anh ấy, cô ấy, nó, khác', sinoVietnamese: 'tha', isTraditional: true },
    { character: '她', pinyin: 'tā', plainPinyin: 'ta', meaning: 'cô ấy', sinoVietnamese: 'tha', isTraditional: true },
    { character: '陳', pinyin: 'chén', plainPinyin: 'chen', meaning: 'họ trần', sinoVietnamese: 'trần', isTraditional: true },
    { character: '陈', pinyin: 'chén', plainPinyin: 'chen', meaning: 'họ trần', sinoVietnamese: 'trần', isTraditional: false },
    { character: '阮', pinyin: 'ruǎn', plainPinyin: 'ruan', meaning: 'họ nguyễn', sinoVietnamese: 'nguyễn', isTraditional: true },
    { character: '王', pinyin: 'wáng', plainPinyin: 'wang', meaning: 'vua, họ vương', sinoVietnamese: 'vương', isTraditional: true },
    { character: '李', pinyin: 'lǐ', plainPinyin: 'li', meaning: 'họ lý', sinoVietnamese: 'lý', isTraditional: true },
    { character: '曰風', pinyin: 'yuē fēng', plainPinyin: 'yuefeng', meaning: 'viết phong', sinoVietnamese: 'viết phong', isTraditional: true },
    { character: '曰风', pinyin: 'yuē fēng', plainPinyin: 'yuefeng', meaning: 'viết phong', sinoVietnamese: 'viết phong', isTraditional: false },
    { character: '中國', pinyin: 'zhōngguó', plainPinyin: 'zhongguo', meaning: 'trung quốc', sinoVietnamese: 'trung quốc', isTraditional: true },
    { character: '中国', pinyin: 'zhōngguó', plainPinyin: 'zhongguo', meaning: 'trung quốc', sinoVietnamese: 'trung quốc', isTraditional: false },
    { character: '臺灣', pinyin: 'táiwān', plainPinyin: 'taiwan', meaning: 'đài loan', sinoVietnamese: 'đài loan', isTraditional: true },
    { character: '台灣', pinyin: 'táiwān', plainPinyin: 'taiwan', meaning: 'đài loan', sinoVietnamese: 'đài loan', isTraditional: true },
    { character: '台湾', pinyin: 'táiwān', plainPinyin: 'taiwan', meaning: 'đài loan', sinoVietnamese: 'đài loan', isTraditional: false },
    { character: '越南', pinyin: 'yuènán', plainPinyin: 'yuenan', meaning: 'việt nam', sinoVietnamese: 'việt nam', isTraditional: true },
    { character: '日本', pinyin: 'rìběn', plainPinyin: 'riben', meaning: 'nhật bản', sinoVietnamese: 'nhật bản', isTraditional: true },
    { character: '美國', pinyin: 'měiguó', plainPinyin: 'meiguo', meaning: 'nước mỹ', sinoVietnamese: 'mỹ quốc', isTraditional: true },
    { character: '美国', pinyin: 'měiguó', plainPinyin: 'meiguo', meaning: 'nước mỹ', sinoVietnamese: 'mỹ quốc', isTraditional: false },
    { character: '香港', pinyin: 'xiānggǎng', plainPinyin: 'xianggang', meaning: 'hong kong', sinoVietnamese: 'hương cảng', isTraditional: true },
    { character: '澳門', pinyin: 'àomén', plainPinyin: 'aomen', meaning: 'macau', sinoVietnamese: 'áo môn', isTraditional: true },
    { character: '澳门', pinyin: 'àomén', plainPinyin: 'aomen', meaning: 'macau', sinoVietnamese: 'áo môn', isTraditional: false },
    { character: '人', pinyin: 'rén', plainPinyin: 'ren', meaning: 'người', sinoVietnamese: 'nhân', isTraditional: true },
    { character: '請', pinyin: 'qǐng', plainPinyin: 'qing', meaning: 'mời, xin', sinoVietnamese: 'thỉnh', isTraditional: true },
    { character: '请', pinyin: 'qǐng', plainPinyin: 'qing', meaning: 'mời, xin', sinoVietnamese: 'thỉnh', isTraditional: false },
    { character: '喝', pinyin: 'hē', plainPinyin: 'he', meaning: 'uống', sinoVietnamese: 'hát', isTraditional: true },
    { character: '要', pinyin: 'yào', plainPinyin: 'yao', meaning: 'cần, phải, muốn', sinoVietnamese: 'yếu', isTraditional: true },
    { character: '很', pinyin: 'hěn', plainPinyin: 'hen', meaning: 'rất, quá, lắm', sinoVietnamese: 'ngận', isTraditional: true },
    { character: '喜歡', pinyin: 'xǐhuān', plainPinyin: 'xihuan', meaning: 'thích', sinoVietnamese: 'hỷ hoan', isTraditional: true },
    { character: '喜欢', pinyin: 'xǐhuān', plainPinyin: 'xihuan', meaning: 'thích', sinoVietnamese: 'hỷ hoan', isTraditional: false },
    { character: '茶', pinyin: 'chá', plainPinyin: 'cha', meaning: 'trà', sinoVietnamese: 'trà', isTraditional: true },
    { character: '咖啡', pinyin: 'kāfēi', plainPinyin: 'kafei', meaning: 'cà phê', sinoVietnamese: 'già phê (phiên âm)', isTraditional: true },
    { character: '水', pinyin: 'shuǐ', plainPinyin: 'shui', meaning: 'nước', sinoVietnamese: 'thuỷ', isTraditional: true },
    { character: '姓', pinyin: 'xìng', plainPinyin: 'xing', meaning: 'họ', sinoVietnamese: 'tính', isTraditional: true },
    { character: '叫', pinyin: 'jiào', plainPinyin: 'jiao', meaning: 'gọi, tên là, kêu', sinoVietnamese: 'khiếu', isTraditional: true },
    { character: '先生', pinyin: 'xiānshēng', plainPinyin: 'xiansheng', meaning: 'ông (mr), tiên sinh', sinoVietnamese: 'tiên sinh', isTraditional: true },
    { character: '小姐', pinyin: 'xiǎojiě', plainPinyin: 'xiaojie', meaning: 'chị, cô (ms)', sinoVietnamese: 'tiểu thư', isTraditional: true },
    { character: '來', pinyin: 'lái', plainPinyin: 'lai', meaning: 'tới', sinoVietnamese: 'lai', isTraditional: true },
    { character: '来', pinyin: 'lái', plainPinyin: 'lai', meaning: 'tới', sinoVietnamese: 'lai', isTraditional: false },
    { character: '們', pinyin: 'men', plainPinyin: 'men', meaning: 'các', sinoVietnamese: 'môn', isTraditional: true },
    { character: '们', pinyin: 'men', plainPinyin: 'men', meaning: 'các', sinoVietnamese: 'môn', isTraditional: false },
    { character: '哪', pinyin: 'nǎ', plainPinyin: 'na', meaning: 'nào', sinoVietnamese: 'na', isTraditional: true },
    { character: '什麼', pinyin: 'shénme', plainPinyin: 'shenme', meaning: 'cái gì', sinoVietnamese: 'thập ma', isTraditional: true },
    { character: '什么', pinyin: 'shénme', plainPinyin: 'shenme', meaning: 'cái gì', sinoVietnamese: 'thập ma', isTraditional: false },
    { character: '甚麼', pinyin: 'shénme', plainPinyin: 'shenme', meaning: 'cái gì', sinoVietnamese: 'thậm ma', isTraditional: true },
    { character: '呢', pinyin: 'ne', plainPinyin: 'ne', meaning: 'thán từ nghi vấn (còn, nhỉ, hả, giờ), thán từ nhấn mạnh (đấy, cơ)', sinoVietnamese: 'ni', isTraditional: true },
    { character: '烏龍', pinyin: 'wū lóng', plainPinyin: 'wulong', meaning: 'ô long', sinoVietnamese: 'ô long', isTraditional: true },
    { character: '乌龙', pinyin: 'wū lóng', plainPinyin: 'wulong', meaning: 'ô long', sinoVietnamese: 'ô long', isTraditional: false },
    { character: '老師', pinyin: 'lǎoshī', plainPinyin: 'laoshi', meaning: 'thầy, cô giáo', sinoVietnamese: 'lão sư', isTraditional: true },
    { character: '老师', pinyin: 'lǎoshī', plainPinyin: 'laoshi', meaning: 'thầy, cô giáo', sinoVietnamese: 'lão sư', isTraditional: false },
    { character: '學生', pinyin: 'xuéshēng', plainPinyin: 'xuesheng', meaning: 'học sinh, sinh viên', sinoVietnamese: 'học sinh', isTraditional: true },
    { character: '学生', pinyin: 'xuéshēng', plainPinyin: 'xuesheng', meaning: 'học sinh, sinh viên', sinoVietnamese: 'học sinh', isTraditional: false },
    { character: '同學', pinyin: 'tóngxué', plainPinyin: 'tongxue', meaning: 'bạn cùng lớp', sinoVietnamese: 'đồng học', isTraditional: true },
    { character: '同学', pinyin: 'tóngxué', plainPinyin: 'tongxue', meaning: 'bạn cùng lớp', sinoVietnamese: 'đồng học', isTraditional: false },
    { character: '朋友', pinyin: 'péngyǒu', plainPinyin: 'pengyou', meaning: 'bạn bè', sinoVietnamese: 'bằng hữu', isTraditional: true },
    { character: '漢語', pinyin: 'hànyǔ', plainPinyin: 'hanyu', meaning: 'tiếng trung, tiếng hán', sinoVietnamese: 'hán ngữ', isTraditional: true },
    { character: '汉语', pinyin: 'hànyǔ', plainPinyin: 'hanyu', meaning: 'tiếng trung, tiếng hán', sinoVietnamese: 'hán ngữ', isTraditional: false },
    { character: '名字', pinyin: 'míngzì', plainPinyin: 'mingzi', meaning: 'tên', sinoVietnamese: 'danh tự', isTraditional: true },
];



function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
// Event listener for "Enter" key
document.getElementById('pinyin-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior (form submission, etc.)
        if (isChecking) {
            checkPinyin(); // Check the answer if still in checking mode
        } else {
            showCharacter(); // Move to the next character if already checked
        }
    }
});

// Button click handler
document.getElementById('checkNextButton').addEventListener('click', function() {
    if (isChecking) {
        checkPinyin(); // Check the answer
    } else {
        showCharacter(); // Show the next character
    }
});

function highlightTones(pinyin) {
    return pinyin.replace(/([āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])/g, '<span class="tone">$1</span>');
}

let isChecking = true; // To track the button state (checking or next)
let currentCharacter = getRandomCharacter(); // Get a random character at the start

function checkPinyin() {
    const userInput = document.getElementById('pinyin-input').value.trim().toLowerCase();

    // Hide the input box when the answer is checked
    document.getElementById('pinyin-input').classList.add('hidden');

    if (userInput === currentCharacter.plainPinyin) {
        document.getElementById('feedback').innerHTML = `
             <span class="pinyin">${highlightTones(currentCharacter.pinyin)}</span> 
           <br>
            <br>
            ${currentCharacter.meaning} <br> 
            hán việt: ${currentCharacter.sinoVietnamese}
        `;
    } else {
        document.getElementById('feedback').innerHTML = `
            sai !!!
            <br>
    
            <span class="pinyin">${highlightTones(currentCharacter.pinyin)}</span> <br> <br>
            ${currentCharacter.meaning} <br>
            hán việt: ${currentCharacter.sinoVietnamese}
        `;
    }

    // Change the button text to "Tiếp"
    document.getElementById('checkNextButton').innerHTML = 'tiếp';
    isChecking = false; // Set state to "next"
}

function showCharacter() {
    if (!isChecking) { // Only show a new character when not in checking state
        currentCharacter = getRandomCharacter(); // Get a new random character

        // Check if the character is traditional or simplified
        const characterClass = currentCharacter.isTraditional ? 'traditional' : 'simplified';

        // Display the character with the appropriate class (traditional or simplified)
        document.getElementById('character-display').innerHTML = `<span class="${characterClass}">${currentCharacter.character}</span>`;

        // Reset the input box and make it visible again
        document.getElementById('pinyin-input').value = '';
        document.getElementById('pinyin-input').classList.remove('hidden');
        document.getElementById('feedback').innerHTML = '';

        // Change the button back to "Kiểm tra"
        document.getElementById('checkNextButton').innerHTML = 'kiểm tra';
        isChecking = true; // Set state back to "checking"
    } else {
        checkPinyin(); // Check the answer if the button is in the "checking" state
    }
}






// Initial character display
document.getElementById('character-display').innerHTML = currentCharacter.character;




   // if (userInput === currentCharacter.plainPinyin) {
     //   document.getElementById('feedback').innerHTML = `
     //       <span class="pinyin">${highlightTones(currentCharacter.pinyin)}</span> 
     //       <br>
      //      <br>
     //       ${currentCharacter.meaning} <br> 
     //       hán việt: ${currentCharacter.sinoVietnamese}
    //    `;
//} else {
  //      document.getElementById('feedback').innerHTML = `
  //          sai !!!
  //          <br>
  //  
  //          <span class="pinyin">${highlightTones(currentCharacter.pinyin)}</span> <br> <br>
   //         ${currentCharacter.meaning} <br>
  //          hán việt: ${currentCharacter.sinoVietnamese}
 
