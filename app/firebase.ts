import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, updateDoc, collection, onSnapshot , query} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfL7a64UMQAAgGdifhgpz5qzSMGRQmRac",
  authDomain: "surveyapp-dbb8b.firebaseapp.com",
  projectId: "surveyapp-dbb8b",
  storageBucket: "surveyapp-dbb8b.appspot.com",
  messagingSenderId: "736246615543",
  appId: "1:736246615543:web:87eeb936118d9d3ca632f2",
  measurementId: "G-SYB2NEH4LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const colRef = collection(db, 'BlogPosts');
export { db,colRef, auth, provider, storage };

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const user = result.user;

      if (user) {
        const name = user.displayName;
        const email = user.email;
        const profilePic = user.photoURL;

        console.log(name, email, profilePic);

        if (name) localStorage.setItem("name", name);
        if (email) localStorage.setItem("email", email);
        if (profilePic) localStorage.setItem("profilePic", profilePic);

        window.location.reload();
      } else {
        console.log('User data not available');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserAuthentication = async () => {
  const user = await new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });

  return user;
};

export const checkUserAccess = async () => {
  try {
    const user = await getUserAuthentication();
    if (user) {
      const userEmail = user.email;
      if (userEmail === 'ondralukes06@seznam.cz') {
        console.log('User has access to the Firebase database');
        return true;
      } else {
        console.log('User does not have access to the Firebase database');
        return false;
      }
    } else {
      console.log('No user is signed in');
      return false;
    }
  } catch (error) {
    console.log('Error occurred:', error);
    return false;
  }
};

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('User has signed out');
  }
});