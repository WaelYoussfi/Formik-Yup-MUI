import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
var firebaseConfig = {
  apiKey: "AIzaSyBFossw0q8WMYjjC9iq8kLiadpEMblzbsA",
  authDomain: "webrtc-chat-room.firebaseapp.com",
  projectId: "webrtc-chat-room",
  storageBucket: "webrtc-chat-room.appspot.com",
  messagingSenderId: "1082970144288",
  appId: "1:1082970144288:web:8cca73182fd3b76e490645",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
