// 피카츄 메시지 처리
function pikachu(message, pikaNum) {
    const msg = message.content.split(' ')[0];
    if (pikaNum >= 5) {
        pikaNum = 0;
        return pikaNum;
    }

    switch(msg) {
        case '피카츄':
            message.reply('피카피카');
            pikaNum++;
            break;
        case '피카피카':
            message.reply('피카츄');
            pikaNum++;
            break;
        case '삐까':
            message.reply('쮸!!');
            break;
        case '피카':
            message.reply('츄!!');
            break;
    }
    console.log(pikaNum);
    return pikaNum;
}

module.exports = pikachu;