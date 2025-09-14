const db = require('./firestore');
const { query, where, orderBy, limit, getDocs } = require('firebase/firestore');
const createRandomKey = require('../../utils/createRandomKey');

async function addKeyword(keyword) {
    const keywordCollection = db.collection('keywords');
    const docRef = keywordCollection.doc();
    await docRef.set(docRef, {
        id: docRef.id,
        name: keyword.name,
        category: keyword.category,
        location: keyword.location,
        randomA: createRandomKey(),
        randomB: createRandomKey(),
        randomC: createRandomKey(),
        randomD: createRandomKey(),
        randomE: createRandomKey(),
        randomF: createRandomKey(),
    });
    console.log(`${keyword.name} Keyword added successfully`);
}

async function getKeyword(num) {
    const randomPoint = Math.random() * 1000000;

    const keywordsRef = db.collection('keywords');
    const snapshot = await keywordsRef.where('randomA', '>=', randomPoint).orderBy('randomA').limit(num).get();
    if (snapshot.size < num) {
        const missing = num - snapshot.size;
        const missingSnapshot = await keywordsRef.where('randomA', '<', randomPoint).orderBy('randomA').limit(missing).get();
        snapshot.docs.push(...missingSnapshot.docs);
    }

    const result = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    console.log(`${result.length} Keywords retrieved successfully`);
    return result;
}

module.exports = { addKeyword, getKeyword };