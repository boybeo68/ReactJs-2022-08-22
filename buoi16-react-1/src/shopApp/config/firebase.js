// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firebase-firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDQW5DTTYRfQQPVQWYVf9A6rPG5miy_mAo',
  authDomain: 'chatonline-198aa.firebaseapp.com',
  projectId: 'chatonline-198aa',
  storageBucket: 'chatonline-198aa.appspot.com',
  messagingSenderId: '798043843022',
  appId: '1:798043843022:web:bc34fea8ba0ada06aca39f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
