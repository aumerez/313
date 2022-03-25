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
    for (let i = quantity; i > 0; i--) {
      const tokenRef = doc(collection(db,COLLECTION_NAME));
      batch.set(tokenRef, {
        tokenId : tokenIdInt - i + 1,
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
  console.log(tokenIdInt,tokenIdInt <= 100);
  if (tokenIdInt <= 100)
    return 0;
  if (tokenIdInt <= 200)
    return 0.06;
  if (tokenIdInt <= 400)
    return 0.1;
  if (tokenIdInt <= 1500) 
    return 0.2;
  return 0.5;
}
