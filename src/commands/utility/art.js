const { addKeyword, getKeyword } = require('../../services/keywordService');

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
                const keyword = await getKeyword(3);
                await message.reply('추천된 키워드입니다.' + keyword.map(k => k.name).join(', '));
                break;
        }
    },
};