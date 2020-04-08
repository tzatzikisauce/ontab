import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyBUaGuN4srqK-e0pWvymHNnbQgatjaYjt8',
  authDomain: 'ontabnative.firebaseapp.com',
  databaseURL: 'https://ontabnative.firebaseio.com',
  projectId: 'ontabnative',
  storageBucket: 'ontabnative.appspot.com',
  messagingSenderId: '5938363726',
  appId: '1:5938363726:web:c13f20afc4a28ed4ebb21f',
  measurementId: 'G-G9S62X31TW',
};
let app = Firebase.initializeApp(config);
export const db = app.database();
