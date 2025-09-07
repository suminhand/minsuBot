const db = require('../src/services/firestore');
const defaultKeywords = require('../data/defaultKewords.js');

async function seedKeywords() {
    try {
        const keywords = db.collection('keywords');
        const snapshot = await keywords.get();

        if (snapshot.empty) {
            console.log('No keywords found');
        } else {
            console.log('Keywords already exist');
            return;
        }

        console.log('Starting keyword seeding...');

        try {
            const batch = db.batch();
            const keywordCollection = keywords;

            for (const keyword of defaultKeywords) {
                const docRef = keywordCollection.doc(); // 고유 id 생성
                batch.set(docRef, {
                    id: docRef.id,
                    name: keyword.name,
                    category: keyword.category,
                    location: keyword.location
                });
            }

            await batch.commit();
            console.log('Keyword seeding completed successfully');
        } catch (error) {
            console.error('Error seeding keywords:', error);
            throw error;
        }
    } catch (error) {
        console.error('Error checking keywords:', error);
        throw error;
    }

    
}

module.exports = seedKeywords;