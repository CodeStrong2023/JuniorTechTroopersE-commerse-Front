// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNRXWH1O0pP0nH701Ja3LmmVqr7dqyXBY",
  authDomain: "trooperstay.firebaseapp.com",
  projectId: "trooperstay",
  storageBucket: "trooperstay.appspot.com",
  messagingSenderId: "720990543501",
  appId: "1:720990543501:web:416617640bb3665f240cc4",
  measurementId: "G-KR06K737NR"
};

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBNRXWH1O0pP0nH701Ja3LmmVqr7dqyXBY",
    authDomain: "trooperstay.firebaseapp.com",
    projectId: "trooperstay",
    storageBucket: "trooperstay.appspot.com",
    messagingSenderId: "720990543501",
    appId: "1:720990543501:web:416617640bb3665f240cc4"
  }
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);