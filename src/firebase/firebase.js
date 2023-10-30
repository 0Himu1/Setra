// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCc4sP-XGAjBnuMxIJ6mAuC6F9dvGRKtYc',
  authDomain: 'setra-3d920.firebaseapp.com',
  projectId: 'setra-3d920',
  storageBucket: 'setra-3d920.appspot.com',
  messagingSenderId: '548795554065',
  appId: '1:548795554065:web:438bb11dc510122cba94b0',
  measurementId: 'G-GFS5C22TQS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
