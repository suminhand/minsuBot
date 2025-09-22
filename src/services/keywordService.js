const conn = require('../config/connection');

// 키워드 가져오기
async function getAllKeyword() {
    const [keywords] = await conn.execute('SELECT * FROM keyword');
    console.log(keywords);
    console.log(`${keywords.length} Keywords retrieved successfully`);
    return keywords;
}

async function getKeyword(num) {
    console.log(num, typeof num);
    const [keywords] = await conn.execute(`SELECT * FROM keyword ORDER BY RAND() LIMIT ${num}`);
    console.log(keywords);
    console.log(`${keywords.length} Keywords retrieved successfully`);
    return keywords;
}

module.exports = { getAllKeyword, getKeyword };
