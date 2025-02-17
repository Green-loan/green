// Import required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWoEdf5p3T8DfJX3IWw3s6PNWKjXdo9-s",
  authDomain: "robot-1ed2b.firebaseapp.com",
  databaseURL: "https://robot-1ed2b-default-rtdb.firebaseio.com",
  projectId: "robot-1ed2b",
  storageBucket: "robot-1ed2b.appspot.com",
  messagingSenderId: "71843575877",
  appId: "1:71843575877:android:61b8b09dc5bf5d21158b2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
