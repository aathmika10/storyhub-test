import { firebase } from '@firebase/app';
require ("@firebase/firestore")

  var firebaseConfig = {
    apiKey: "AIzaSyBjNUSOYzZIANHTZMnAJaCTy9KJRDrkBYw",
    authDomain: "story-hub-773c5.firebaseapp.com",
    databaseURL: "https://story-hub-773c5.firebaseio.com",
    projectId: "story-hub-773c5",
    storageBucket: "story-hub-773c5.appspot.com",
    messagingSenderId: "279878521687",
    appId: "1:279878521687:web:169c7e2daa5edc4ee2e412"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  export default firebase.firestore();