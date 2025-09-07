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
    async execute(message) {
        await message.reply('준비 중입니다.');
    },
};