// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCf6hWz_RWafwdh-dyW9vBZzNRT7LYYRTw',
  authDomain: 'rj2208-605ac.firebaseapp.com',
  databaseURL: 'https://rj2208-605ac-default-rtdb.firebaseio.com',
  projectId: 'rj2208-605ac',
  storageBucket: 'rj2208-605ac.appspot.com',
  messagingSenderId: '836505855430',
  appId: '1:836505855430:web:d5dfd4ac05406f75d03ec7',
  measurementId: 'G-4T9H7M5TME',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
