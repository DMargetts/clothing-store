import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMYjIWQRTG59ci0lJ4IpUX_qcDm-yQ6ts",
  authDomain: "clothing-store-3fc6e.firebaseapp.com",
  databaseURL: "https://clothing-store-3fc6e.firebaseio.com",
  projectId: "clothing-store-3fc6e",
  storageBucket: "clothing-store-3fc6e.appspot.com",
  messagingSenderId: "311326197627",
  appId: "1:311326197627:web:ae041b05b1216eb4219fde",
  measurementId: "G-GS6NHL1PMS",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
