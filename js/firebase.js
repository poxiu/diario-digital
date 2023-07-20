// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// import { } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import {getFirestore, 
  addDoc,
  getDocs,
  collection,
  doc,
  onSnapshot} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOnomYvwI_aIh42er9oVH8oEaGi-j6q5M",
  authDomain: "unidad4-e9868.firebaseapp.com",
  projectId: "unidad4-e9868",
  storageBucket: "unidad4-e9868.appspot.com",
  messagingSenderId: "716027473039",
  appId: "1:716027473039:web:d9176296926d58fccd54fa",
  measurementId: "G-4ZF9F3KNEX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore();

export const saveTask = (title, description) =>
//console.log(title, description);
//export const getTasks = () => console.log('tasks-list');
addDoc(collection(db, 'tasks'), {title, description})


//export const getTasks = async () => getDocs(collection(db, 'tasks'))
export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

// export const onGetTasks = (callback) =>
// onSnapshot(collection(db, 'tasks'), callback);
//export {onSnapshot, collection}



