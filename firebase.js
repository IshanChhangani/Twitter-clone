import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBinXXHe3bNOF2ZWvD9MJ5lwD1J1BUMVH4",
    authDomain: "twitter-clone-78ae0.firebaseapp.com",
    projectId: "twitter-clone-78ae0",
    storageBucket: "twitter-clone-78ae0.appspot.com",
    messagingSenderId: "396709257191",
    appId: "1:396709257191:web:4209cb54eeaab16a80a742"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
