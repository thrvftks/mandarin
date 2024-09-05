const characters = [
    { character: '你', pinyin: 'nǐ', plainPinyin: 'ni', meaning: 'bạn (ngôi thứ 2)', sinoVietnamese: 'nhĩ' },
    { character: '好', pinyin: 'hǎo', plainPinyin: 'hao', meaning: 'tốt', sinoVietnamese: 'hảo' },
    { character: '是', pinyin: 'shì', plainPinyin: 'shi', meaning: 'là', sinoVietnamese: 'thị' },
    { character: '我', pinyin: 'wǒ', plainPinyin: 'wo', meaning: 'tôi', sinoVietnamese: 'ngã' },
    { character: '这', pinyin: 'zhè', plainPinyin: 'zhe', meaning: 'đây', sinoVietnamese: 'giá' },
    { character: '這', pinyin: 'zhè', plainPinyin: 'zhe', meaning: 'đây', sinoVietnamese: 'giá' },
    { character: '的', pinyin: 'de', plainPinyin: 'de', meaning: 'của', sinoVietnamese: 'đích' },
    { character: '不', pinyin: 'bù', plainPinyin: 'bu', meaning: 'không', sinoVietnamese: 'bất' },
    { character: '嗎', pinyin: 'ma', plainPinyin: 'ma', meaning: 'trợ từ nghi vấn (gì thế, hả)', sinoVietnamese: 'ma' },
    { character: '吗', pinyin: 'ma', plainPinyin: 'ma', meaning: 'trợ từ nghi vấn (gì thế, hả)', sinoVietnamese: 'ma' },
    { character: '謝謝', pinyin: 'xièxiè', plainPinyin: 'xiexie', meaning: 'cảm ơn', sinoVietnamese: 'tạ tạ' },
    { character: '谢谢', pinyin: 'xièxiè', plainPinyin: 'xiexie', meaning: 'cảm ơn', sinoVietnamese: 'tạ tạ' },
    { character: '歡迎', pinyin: 'huānyíng', plainPinyin: 'huanying', meaning: 'hoan nghênh, chào mừng', sinoVietnamese: 'hoan nghênh' },
    { character: '欢迎', pinyin: 'huānyíng', plainPinyin: 'huanying', meaning: 'hoan nghênh, chào mừng', sinoVietnamese: 'hoan nghênh' },
    { character: '他', pinyin: 'tā', plainPinyin: 'ta', meaning: 'anh ấy, cô ấy, nó, khác', sinoVietnamese: 'tha' },
    { character: '她', pinyin: 'tā', plainPinyin: 'ta', meaning: 'cô ấy', sinoVietnamese: 'tha' },
    { character: '陳', pinyin: 'chén', plainPinyin: 'chen', meaning: 'họ trần', sinoVietnamese: 'trần' },
    { character: '陈', pinyin: 'chén', plainPinyin: 'chen', meaning: 'họ trần', sinoVietnamese: 'trần' },
    { character: '阮', pinyin: 'ruǎn', plainPinyin: 'ruan', meaning: 'họ nguyễn', sinoVietnamese: 'nguyễn' },
    { character: '王', pinyin: 'wáng', plainPinyin: 'wang', meaning: 'vua, họ vương', sinoVietnamese: 'vương' },
    { character: '李', pinyin: 'lǐ', plainPinyin: 'li', meaning: 'họ lý', sinoVietnamese: 'lý' },
    { character: '曰風', pinyin: 'yuē fēng', plainPinyin: 'yuefeng', meaning: 'viết phong', sinoVietnamese: 'viết phong' },
    { character: '曰风', pinyin: 'yuē fēng', plainPinyin: 'yuefeng', meaning: 'viết phong', sinoVietnamese: 'viết phong' },
    { character: '中國', pinyin: 'zhōngguó', plainPinyin: 'zhongguo', meaning: 'trung quốc', sinoVietnamese: 'trung quốc' },
    { character: '中国', pinyin: 'zhōngguó', plainPinyin: 'zhongguo', meaning: 'trung quốc', sinoVietnamese: 'trung quốc' },
    { character: '臺灣', pinyin: 'táiwān', plainPinyin: 'taiwan', meaning: 'đài loan', sinoVietnamese: 'đài loan' },
    { character: '台灣', pinyin: 'táiwān', plainPinyin: 'taiwan', meaning: 'đài loan', sinoVietnamese: 'đài loan' },
    { character: '台湾', pinyin: 'táiwān', plainPinyin: 'taiwan', meaning: 'đài loan', sinoVietnamese: 'đài loan' },
    { character: '越南', pinyin: 'yuènán', plainPinyin: 'yuenan', meaning: 'việt nam', sinoVietnamese: 'việt nam' },
    { character: '日本', pinyin: 'rìběn', plainPinyin: 'riben', meaning: 'nhật bản', sinoVietnamese: 'nhật bản' },
    { character: '美國', pinyin: 'měiguó', plainPinyin: 'meiguo', meaning: 'nước mỹ', sinoVietnamese: 'mỹ quốc' },
    { character: '美国', pinyin: 'měiguó', plainPinyin: 'meiguo', meaning: 'nước mỹ', sinoVietnamese: 'mỹ quốc' },
    { character: '香港', pinyin: 'xiānggǎng', plainPinyin: 'xianggang', meaning: 'hong kong', sinoVietnamese: 'hương cảng' },
    { character: '澳門', pinyin: 'àomén', plainPinyin: 'aomen', meaning: 'macau', sinoVietnamese: 'áo môn' },
    { character: '澳门', pinyin: 'àomén', plainPinyin: 'aomen', meaning: 'macau', sinoVietnamese: 'áo môn' },
    { character: '人', pinyin: 'rén', plainPinyin: 'ren', meaning: 'người', sinoVietnamese: 'nhân' },
    { character: '請', pinyin: 'qǐng', plainPinyin: 'qing', meaning: 'mời, xin', sinoVietnamese: 'thỉnh' },
    { character: '请', pinyin: 'qǐng', plainPinyin: 'qing', meaning: 'mời, xin', sinoVietnamese: 'thỉnh' },
    { character: '喝', pinyin: 'hē', plainPinyin: 'he', meaning: 'uống', sinoVietnamese: 'hát' },
    { character: '要', pinyin: 'yào', plainPinyin: 'yao', meaning: 'cần, phải, muốn', sinoVietnamese: 'yếu' },
    { character: '很', pinyin: 'hěn', plainPinyin: 'hen', meaning: 'rất, quá, lắm', sinoVietnamese: 'ngận' },
    { character: '喜歡', pinyin: 'xǐhuān', plainPinyin: 'xihuan', meaning: 'thích', sinoVietnamese: 'hỷ hoan' },
    { character: '喜欢', pinyin: 'xǐhuān', plainPinyin: 'xihuan', meaning: 'thích', sinoVietnamese: 'hỷ hoan' },
    { character: '茶', pinyin: 'chá', plainPinyin: 'cha', meaning: 'trà', sinoVietnamese: 'trà' },
    { character: '咖啡', pinyin: 'kāfēi', plainPinyin: 'kafei', meaning: 'cà phê', sinoVietnamese: 'già phê (phiên âm)' },
    { character: '水', pinyin: 'shuǐ', plainPinyin: 'shui', meaning: 'nước', sinoVietnamese: 'thuỷ' },
    { character: '姓', pinyin: 'xìng', plainPinyin: 'xing', meaning: 'họ', sinoVietnamese: 'tính' },
    { character: '叫', pinyin: 'jiào', plainPinyin: 'jiao', meaning: 'gọi, tên là, kêu', sinoVietnamese: 'khiếu' },
    { character: '先生', pinyin: 'xiānshēng', plainPinyin: 'xiansheng', meaning: 'ông (mr), tiên sinh', sinoVietnamese: 'tiên sinh' },
    { character: '小姐', pinyin: 'xiǎojiě', plainPinyin: 'xiaojie', meaning: 'chị, cô (ms)', sinoVietnamese: 'tiểu thư' },
    { character: '來', pinyin: 'lái', plainPinyin: 'lai', meaning: 'tới', sinoVietnamese: 'lai' },
    { character: '来', pinyin: 'lái', plainPinyin: 'lai', meaning: 'tới', sinoVietnamese: 'lai' },
    { character: '們', pinyin: 'men', plainPinyin: 'men', meaning: 'các', sinoVietnamese: 'môn' },
    { character: '们', pinyin: 'men', plainPinyin: 'men', meaning: 'các', sinoVietnamese: 'môn' },
    { character: '哪', pinyin: 'nǎ', plainPinyin: 'na', meaning: 'nào', sinoVietnamese: 'na' },
    { character: '什麼', pinyin: 'shénme', plainPinyin: 'shenme', meaning: 'cái gì', sinoVietnamese: 'thập ma' },
    { character: '什么', pinyin: 'shénme', plainPinyin: 'shenme', meaning: 'cái gì', sinoVietnamese: 'thập ma' },
    { character: '甚麼', pinyin: 'shénme', plainPinyin: 'shenme', meaning: 'cái gì', sinoVietnamese: 'thậm ma' },
    { character: '呢', pinyin: 'ne', plainPinyin: 'ne', meaning: 'thán từ nghi vấn (còn, nhỉ, hả, giờ), thán từ nhấn mạnh (đấy, cơ)', sinoVietnamese: 'ni' },
    { character: '烏龍', pinyin: 'wū lóng', plainPinyin: 'wulong', meaning: 'ô long', sinoVietnamese: 'ô long' },
    { character: '乌龙', pinyin: 'wū lóng', plainPinyin: 'wulong', meaning: 'ô long', sinoVietnamese: 'ô long' },
    { character: '老師', pinyin: 'lǎoshī', plainPinyin: 'laoshi', meaning: 'thầy, cô giáo', sinoVietnamese: 'lão sư' },
    { character: '老师', pinyin: 'lǎoshī', plainPinyin: 'laoshi', meaning: 'thầy, cô giáo', sinoVietnamese: 'lão sư' },
    { character: '學生', pinyin: 'xuéshēng', plainPinyin: 'xuesheng', meaning: 'học sinh, sinh viên', sinoVietnamese: 'học sinh' },
    { character: '学生', pinyin: 'xuéshēng', plainPinyin: 'xuesheng', meaning: 'học sinh, sinh viên', sinoVietnamese: 'học sinh' },
    { character: '同學', pinyin: 'tóngxué', plainPinyin: 'tongxue', meaning: 'bạn cùng lớp', sinoVietnamese: 'đồng học' },
    { character: '同学', pinyin: 'tóngxué', plainPinyin: 'tongxue', meaning: 'bạn cùng lớp', sinoVietnamese: 'đồng học' },
    { character: '朋友', pinyin: 'péngyǒu', plainPinyin: 'pengyou', meaning: 'bạn bè', sinoVietnamese: 'bằng hữu' },
    { character: '漢語', pinyin: 'hànyǔ', plainPinyin: 'hanyu', meaning: 'tiếng trung, tiếng hán', sinoVietnamese: 'hán ngữ' },
    { character: '汉语', pinyin: 'hànyǔ', plainPinyin: 'hanyu', meaning: 'tiếng trung, tiếng hán', sinoVietnamese: 'hán ngữ' },
    { character: '名字', pinyin: 'míngzì', plainPinyin: 'mingzi', meaning: 'tên', sinoVietnamese: 'danh tự' },
];

let currentCharacter = null;
let isChecking = true;

function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function showCharacter() {
    currentCharacter = getRandomCharacter();
    document.getElementById('character-display').innerHTML = currentCharacter.character;
    document.getElementById('pinyin-input').value = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('checkNextButton').innerHTML = 'Kiểm tra';
    isChecking = true;
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

    document.getElementById('checkNextButton').innerHTML = 'Chữ tiếp theo';
    isChecking = false;
}

function highlightTones(pinyin) {
    return pinyin.replace(/([āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])/g, '<span class="tone">$1</span>');
}

function handleButtonClick() {
    if (isChecking) {
        checkPinyin();
    } else {
        showCharacter();
    }
}

document.addEventListener("DOMContentLoaded", showCharacter);

