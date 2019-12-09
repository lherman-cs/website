import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPdhSrRnEXcD-r2E_6PXqC4efFqdYCXK0",
  authDomain: "website-f94cb.firebaseapp.com",
  databaseURL: "https://website-f94cb.firebaseio.com",
  projectId: "website-f94cb",
  storageBucket: "website-f94cb.appspot.com",
  messagingSenderId: "874572385796",
  appId: "1:874572385796:web:c118215908a532f0c7ef51",
  measurementId: "G-DJ507RNZGX"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
