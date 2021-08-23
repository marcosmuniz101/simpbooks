import  firebase from "firebase"
import 'firebase/storage';
import '@react-native-firebase/database'


  var firebaseConfig = {
    apiKey: "AIzaSyDnqeM5JQ2RsOdlHopw-cCUhBSGaRiVW_w",
    authDomain: "simpbooks.firebaseapp.com",
    databaseURL: "https://simpbooks-default-rtdb.firebaseio.com",
    projectId: "simpbooks",
    storageBucket: "simpbooks.appspot.com",
    messagingSenderId: "77476128823",
    appId: "1:77476128823:web:0fa1e0f3c4eeaabab0b7b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
