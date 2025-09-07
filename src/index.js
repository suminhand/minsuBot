// 1. 주요 클래스 가져오기
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { token } = require('../config.json');

const fs = require('node:fs');
const path = require('node:path');

const pikachu = require('./commands/fun/pikachu');
const seedKeywords = require('../script/seedKeywords');
const testKeyword = require('./services/artService');

// 2. 클라이언트 객체 생성 (Guilds관련, 메시지관련 인텐트 추가)
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
]});

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandsPath = path.join(foldersPath, 'utility');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}


// 3. 봇이 준비됐을때 한번만(once) 표시할 메시지
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    console.log(client.commands);

    // 기본 데이터 추가
    seedKeywords();
    testKeyword();
});

let pikaNum = 0;

// 4. 누군가 ping을 작성하면 pong으로 답장한다.
client.on('messageCreate', async message => {
    // 피카츄 메시지 처리
    pikaNum = pikachu(message, pikaNum);

    if (message.author.bot) return;
    console.log(message.content);    
    const command = client.commands.get(message.content.split(' ')[0]);
    console.log(command);
    if (!command) return;

    const args = message.content.split(' ').slice(1);
    try {
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
        if (message.replied || message.deferred) {
            await message.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
        } else {
            await message.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
        }
    }
})

// 5. 시크릿키(토큰)을 통해 봇 로그인 실행
client.login(token);
