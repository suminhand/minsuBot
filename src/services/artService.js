const db = require('./firestore');

async function testKeyword() {
    console.log('testKeyword');

    // 데이터 쓰기
    

    // 데이터 읽기
    const snapshot = await db.collection('keywords').get();
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
}

module.exports = testKeyword;