import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  setDoc,
  getDoc,
  getDocs,
  doc,
  collection,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB4DONsy6ql4Ebz_DXrcdT0n6WPBt0IH8I',
  authDomain: 'ideastation-927ea.firebaseapp.com',
  projectId: 'ideastation-927ea',
  storageBucket: 'ideastation-927ea.appspot.com',
  messagingSenderId: '1095846432538',
  appId: '1:1095846432538:web:d40ddb2d61c384d05766a3',
  measurementId: 'G-RQFQ24WYRR',
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

async function getAllUsers() {
  try {
    const usersCollection = collection(db, 'users');
    const querySnapshot = await getDocs(usersCollection);
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
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
export {
  isAuth,
  login,
  logout,
  sendPasswordReset,
  addUser,
  getCurrentUser,
  getAllUsers,
};
