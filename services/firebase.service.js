import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set, get, child, push, update} from 'firebase/database';

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://minsubot-100ac-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const dbRef = ref(getDatabase());
get(child(dbRef)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

function writeData(messages) {
  const db = getDatabase();
  set(ref(db), {
    messages: messages
  });
}



