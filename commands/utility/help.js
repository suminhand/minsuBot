module.exports = {
    data: {
        name: 'help!'
    },
    async execute(message) {
        await message.reply('명령어 안내');
    },
};