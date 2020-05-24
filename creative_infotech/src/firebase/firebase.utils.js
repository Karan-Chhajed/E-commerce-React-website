import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYO9jCcpch8MU8KgaiBqbMrEsJwvOvXac",
    authDomain: "creative-infotech-db.firebaseapp.com",
    databaseURL: "https://creative-infotech-db.firebaseio.com",
    projectId: "creative-infotech-db",
    storageBucket: "creative-infotech-db.appspot.com",
    messagingSenderId: "835899558317",
    appId: "1:835899558317:web:a75cfb8c4dbacf29853924",
    measurementId: "G-CVHT4T13VS"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;