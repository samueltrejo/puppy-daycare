import firebase from 'firebase/app';

import fbRef from '../fbconfig.json';

const firebaseInitApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(fbRef.firebaseConfig);
  }
};

export default firebaseInitApp;
