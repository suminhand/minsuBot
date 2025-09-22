const { getAllKeyword, getKeyword } = require('../services/keywordService');

async function getAllKeywordsController(message) {
    const keywords = await getAllKeyword();
    message.reply('모든 키워드입니다. ' + keywords.map(k => k.name).join(', '));
}

async function getKeywordController(message, num) {
    const keyword = await getKeyword(num);
    message.reply('추천된 키워드입니다. ' + keyword.map(k => k.name).join(', '));
}

module.exports = { getAllKeywordsController, getKeywordController };