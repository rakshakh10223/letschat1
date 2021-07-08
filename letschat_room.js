
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPX_H1QlMhsKgwe-kUCbXr5_RefP0hNzE",
    authDomain: "kwitter-f58f9.firebaseapp.com",
    databaseURL: "https://kwitter-f58f9-default-rtdb.firebaseio.com",
    projectId: "kwitter-f58f9",
    storageBucket: "kwitter-f58f9.appspot.com",
    messagingSenderId: "77515196247",
    appId: "1:77515196247:web:e755055cb33f5e09dde012"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
