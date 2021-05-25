import firebase from 'firebase';

require('@firebase/firestore');

 var firebaseConfig = {
    apiKey: "AIzaSyBrwwFxDXTnliE701fZaSNT6RrmkAw_-co",
    authDomain: "story-hub-6b0e6.firebaseapp.com",
    databaseURL: "https://story-hub-6b0e6-default-rtdb.firebaseio.com",
    projectId: "story-hub-6b0e6",
    storageBucket: "story-hub-6b0e6.appspot.com",
    messagingSenderId: "413740663833",
    appId: "1:413740663833:web:f4f532f7beac71b3a89688"
  };

   firebase.initializeApp(firebaseConfig);
  export  default firebase.firestore();