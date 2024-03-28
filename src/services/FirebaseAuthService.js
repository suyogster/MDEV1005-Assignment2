import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAQ3LMIVTdvGZPo33OgVSjmuVl011lkEzE',
  authDomain: 'thebyteroad-74fb4.firebaseapp.com',
  projectId: 'thebyteroad-74fb4',
  storageBucket: 'thebyteroad-74fb4.appspot.com',
  messagingSenderId: '150477395165',
  appId: '1:150477395165:web:7c723e2467ba80dc03f734',
  measurementId: 'G-0W7G775B61',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

function isAuth() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Unsubscribe from the listener
      resolve(!!user);
      user = user;
    });
  });
}

async function getCurrentUser() {
  const currentAuthenticatedUser = auth.currentUser;
  if (currentAuthenticatedUser != null) {
    const usersInfo = await getDoc(
      doc(db, 'users', currentAuthenticatedUser.uid)
    );
    const currentUserInfo = usersInfo.data();
    return currentUserInfo;
  }

  return { username: '', firstname: '', lastname: '', email: '' };
}

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
}

async function logout() {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
}

async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
}

async function addUser(data) {
  try {
    const { firstname, lastname, email, password, username } = data;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const docRef = await setDoc(doc(db, 'users', user.uid), {
      email,
      firstname,
      lastname,
      username,
    });
    console.log('DocRef::', docRef);
    return user;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
}

// The useAuth hook is a wrapper to this service, make sure exported functions are also reflected
// in the useAuth hook.
export { isAuth, login, logout, sendPasswordReset, addUser, getCurrentUser };
