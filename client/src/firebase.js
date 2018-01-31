import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCcsULJ4779uOrb3MKKHe_94CTxbm4Mytk",
    authDomain: "thegoodbook-2ff92.firebaseapp.com",
    databaseURL: "https://thegoodbook-2ff92.firebaseio.com",
    projectId: "thegoodbook-2ff92",
    storageBucket: "",
    messagingSenderId: "805888665082"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;