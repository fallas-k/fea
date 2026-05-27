import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQclRqmx_H4xm5ojLdMQ-R8CPmyJ_chTI",
  authDomain: "fea-31da2.firebaseapp.com",
  databaseURL: "https://fea-31da2-default-rtdb.firebaseio.com",
  projectId: "fea-31da2",
  storageBucket: "fea-31da2.firebasestorage.app",
  messagingSenderId: "363035097481",
  appId: "1:363035097481:web:ab078cf3869bbd7fc30958",
  measurementId: "G-NGJK5JMWZT"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase conectado");
window.location.href = "login.html";