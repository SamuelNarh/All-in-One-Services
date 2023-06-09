import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCDFeZfgmwzqCDK1ptN1VGk-5e2hi7yUDk",
  authDomain: "shopping-crown-db.firebaseapp.com",
  projectId: "shopping-crown-db",
  storageBucket: "shopping-crown-db.appspot.com",
  messagingSenderId: "599591135534",
  appId: "1:599591135534:web:0b61022502167f3ec832bf",
  measurementId: "G-KPVSQJHW22"
};


export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error creating user',error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle =() =>auth.signInWithPopup(provider);

export default firebase;

