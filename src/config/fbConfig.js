import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPkRT2rnnqaBlTh7lkyN1GPDGt5Hj8dIE",
  authDomain: "note-d74a4.firebaseapp.com",
  databaseURL: "https://note-d74a4.firebaseio.com",
  projectId: "note-d74a4",
  storageBucket: "note-d74a4.appspot.com",
  messagingSenderId: "417938089245",
  appId: "1:417938089245:web:77d4821d9e9150fda82df4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

// Three Collections

// Projects Collection
// - title
// - content
// - firstName
// - lastName
// - authorId
// - timestamp
// Users Collection
// Notification Collection
