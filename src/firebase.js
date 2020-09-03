import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3ZSmxJHrAw1yEc9vIvSz9LlqqNMd9L-k",
  authDomain: "clone-fcc6b.firebaseapp.com",
  databaseURL: "https://clone-fcc6b.firebaseio.com",
  projectId: "clone-fcc6b",
  storageBucket: "clone-fcc6b.appspot.com",
  messagingSenderId: "521955885834",
  appId: "1:521955885834:web:adc37798c6d102bbd570f3",
  measurementId: "G-N53LPYHSV3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
