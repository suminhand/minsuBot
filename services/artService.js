const db = require('./firestore');

async function testKeyword() {
    console.log('testKeyword');
    const docRef = db.collection('art').doc('keywords');

    // 데이터 쓰기
    await docRef.set({
        id: '1',
        name: '여름',
        categoty: '계절'
    });

    // 데이터 읽기
    const snapshot = await db.collection('art').get();
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
}

module.exports = testKeyword;