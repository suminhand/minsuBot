module.exports = {
    data: {
        name: '피카츄!',
        options: [
            {
                ename: 'help',
                kname: '도움말',
                answer: '명령어 종류: 피카, 피카츄, 삐까, 피카피카',
            },
            {
                kname: '피카',
                answer: '츄!!',
            },
            {
                kname: '피카츄',
                answer: '피카피카!!',
            },
            {
                kname: '삐까',
                answer: '쮸!!',
            },
            {
                kname: '피카피카',
                answer: '피카츄!!',
            },
        ],
    },
    async execute(message, args) {
        const opt = args[0];
        if (!opt) {
            await message.reply('피카? (도움말: help)');
            return;
        }
        console.log(this.data.options);
        const answer = this.data.options.find(option => option.ename === opt || option.kname === opt);
        if (!answer) {
            await message.reply('피카? (도움말: help)');
            return;
        }
        await message.reply(answer.answer);
    },
};