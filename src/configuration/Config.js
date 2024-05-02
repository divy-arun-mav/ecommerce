import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCkfluWmc9hvawLY-BNgOPqKVCtSdGVVig",
    authDomain: "ecommerce-e5656.firebaseapp.com",
    projectId: "ecommerce-e5656",
    storageBucket: "ecommerce-e5656.appspot.com",
    messagingSenderId: "419909069469",
    appId: "1:419909069469:web:6d7064b6c3adc9d5f18274",
    measurementId: "G-BDEYPSJ3J0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
