// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvWZbtsBfP5YtRgK75Rh5JHGlo656-_oo',
  authDomain: 'reactjs2208.firebaseapp.com',
  databaseURL: 'https://reactjs2208-default-rtdb.firebaseio.com',
  projectId: 'reactjs2208',
  storageBucket: 'reactjs2208.appspot.com',
  messagingSenderId: '414572900533',
  appId: '1:414572900533:web:73379a2da4895839e94efc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
