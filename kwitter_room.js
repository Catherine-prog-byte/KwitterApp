// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBYL9rnIuTqZm_T0l-KEL5ktXsua0SycAc",
      authDomain: "catherineangelinabot-yhjc.firebaseapp.com",
      databaseURL: "https://catherineangelinabot-yhjc-default-rtdb.firebaseio.com",
      projectId: "catherineangelinabot-yhjc",
      storageBucket: "catherineangelinabot-yhjc.appspot.com",
      messagingSenderId: "357827274507",
      appId: "1:357827274507:web:d66b611e0e1a3f54d5e40e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
