import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBrFZQekhnZHHHX4MPwKjSkaHEiELF27H8",
  authDomain: "gossip-4ad78.firebaseapp.com",
  projectId: "gossip-4ad78",
  storageBucket: "gossip-4ad78.appspot.com",
  messagingSenderId: "50930377571",
  appId: "1:50930377571:web:1f06ad9b352c8fae99e956"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db;
