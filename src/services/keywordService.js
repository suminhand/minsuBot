const db = require('./firestore');
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
    const randomA = Math.floor(Math.random() * 6);
    const keywordCollection = db.collection('keywords');
    
    const randomFieldIndex = Math.floor(Math.random() * 6);

    const randomPoint = Math.random() * 1000000;

    const query = query(
        keywordCollection,
        where("randomA", ">=", randomPoint),
        orderBy("randomA"),
        limit(num)
    )
    
    const querySnapshot = await getDocs(query);
    let keywords = querySnapshot.docs;

    const result = keywords.map(doc => ({ id: doc.id, ...doc.data() }));

    console.log(`${result} Keyword retrieved successfully`);
    return result;
}

module.exports = { addKeyword, getKeyword };