import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQ2XBNSPQNvqzfSLcjB6BfiFs8qT6pI-8",
  authDomain: "ay-one.firebaseapp.com",
  projectId: "ay-one",
  storageBucket: "ay-one.firebasestorage.app",
  messagingSenderId: "1067446390162",
  appId: "1:1067446390162:web:42dd3f61c7aaabeacec54b",
  measurementId: "G-YB3PNVJN5W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase connected");