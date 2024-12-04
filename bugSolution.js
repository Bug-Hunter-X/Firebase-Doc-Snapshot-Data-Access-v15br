This solution uses async/await for cleaner asynchronous handling and error handling. It also includes comprehensive error handling to catch potential issues.
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData() {
  try {
    const docRef = doc(db, "yourCollection", "yourDocId");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const name = docSnap.data().name;
      console.log("Name:", name);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
```