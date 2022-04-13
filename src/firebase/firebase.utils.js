// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, writeBatch, doc, 
  Timestamp, query, orderBy, limit } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsQpVoFxo24weQBBioiLMXJL-gj0KX2m4",
  authDomain: "project-ac51b.firebaseapp.com",
  projectId: "project-ac51b",
  storageBucket: "project-ac51b.appspot.com",
  messagingSenderId: "472958080183",
  appId: "1:472958080183:web:994e7b8c02fdb451df6932"
};

const COLLECTION_NAME = '313-mint';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const saveMintTokens = async (tokenId, quantity=1) => {
  try {
    console.log("in saveMintTokens");
    const batch = writeBatch(db);
    const tokenIdInt = parseInt(tokenId);
    for (let i = 0; i < quantity; i++) {
      const tokenRef = doc(collection(db,COLLECTION_NAME));
      batch.set(tokenRef, {
        tokenId : tokenIdInt + i,
        createdAt : Timestamp.fromDate(new Date())
      })
    }
    await batch.commit();
    return true;
  } catch(e) {
    console.log(e);
    return false;
  }
}

export const getTokenId = async () => {
  try {
    const collectionRef = collection(db,COLLECTION_NAME);
    const q = query(collectionRef, orderBy('tokenId', 'desc'), limit(1));
    const querySnapshot = await getDocs(q);
    let result = 'fco';
    if (querySnapshot) {
      querySnapshot.forEach(doc => {
        result = doc.data();
      })
    }
    return result;
  } catch(e) {
    console.log(e);
    return null;
  }
}

export const getMintPrice = (tokenId) => {
  const tokenIdInt = parseInt(tokenId) + 1;
  console.log(tokenIdInt,tokenIdInt <= 5);
  if (tokenIdInt <= 5)
    return 0;
  if (tokenIdInt <= 10)
    return 0.00313;
  return 0.006;
}
