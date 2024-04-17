import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDQBV4mpLRazF4yKWAyOcGGoeG1rq9Rbpc",
    authDomain: "crwn-clothing-db-a30af.firebaseapp.com",
    projectId: "crwn-clothing-db-a30af",
    storageBucket: "crwn-clothing-db-a30af.appspot.com",
    messagingSenderId: "1013120582742",
    appId: "1:1013120582742:web:623756706dbe6e9851a7f7"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({ 
    prompt: 'select_account' 
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserProfileDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.error("Error creating user", error.message);
      }
    }
    return userDocRef;
  };
  