import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyAsAXuf09SEFH6Y8WAkJBAylwtiUchGppE",
    authDomain: "pandattire-db.firebaseapp.com",
    databaseURL: "https://pandattire-db.firebaseio.com",
    projectId: "pandattire-db",
    storageBucket: "pandattire-db.appspot.com",
    messagingSenderId: "207148560241",
    appId: "1:207148560241:web:a020d180c2e9caa3a310d0",
    measurementId: "G-ZT2EYQEL7W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if(!snapShot.exists){
      const {displayName, email, photoURL} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          photoURL,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  export default firebase;