import * as firebase from  'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAIW547neLQprQeW1PGu1dR3hZ6TLHaAWg",
    authDomain: "projetopi-399b4.firebaseapp.com",
    databaseURL: "https://projetopi-399b4.firebaseio.com",
    projectId: "projetopi-399b4",
    storageBucket: "projetopi-399b4.appspot.com",
    messagingSenderId: "743565272977",
    appId: "1:743565272977:web:5e1e7e579ff7f3790b9c30",
    measurementId: "G-Y5245P2Y3M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;