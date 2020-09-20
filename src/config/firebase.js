import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAqxD9GE9X15Juq_i_JHBSqHgRfQZbLjco",
    authDomain: "react-albums-9bd10.firebaseapp.com",
    databaseURL: "https://react-albums-9bd10.firebaseio.com",
    projectId: "react-albums-9bd10",
    storageBucket: "react-albums-9bd10.appspot.com",
    messagingSenderId: "503162678345",
    appId: "1:503162678345:web:b4c906598d32ff10bea398"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }