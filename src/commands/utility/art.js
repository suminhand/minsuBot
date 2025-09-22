const { getAllKeywordsController, getKeywordController } = require('../../controllers/keywordsController');

module.exports = {
    data: {
        name: '소재!',
        options: [
            {
                ename: 'help',
            },
            {
                ename: 'recommend',
                kname: '추천',
            },
            {
                ename: 'add',
                kname: '추가',
            },
            {
                ename: 'delete',
                kname: '삭제',
            },
            {
                ename: 'list',
                kname: '목록',
            },
            {
                ename: 'search',
                kname: '검색',
            },
        ],
    },
    async execute(message, args) {
        switch (args[0]) {
            case 'help':
                await message.reply('아직 옵션으로 추천만 가능합니다.');
                break;
            case 'recommend':
            case '추천':
                getKeywordController(message,3);
                break;
            case 'list':
            case '목록':
                getAllKeywordsController(message);
                break;
        }
    },
};