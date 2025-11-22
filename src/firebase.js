import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB72rFYOhbk_fd_NFS2a4XynMXCaLuzuR4",
  authDomain: "rethink-uw.firebaseapp.com",
  projectId: "rethink-uw",
  storageBucket: "rethink-uw.firebasestorage.app",
  messagingSenderId: "621129909482",
  appId: "1:621129909482:web:fb1b9a56134f565ad54393",
  measurementId: "G-L3MLVMN2FC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);