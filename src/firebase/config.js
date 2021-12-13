import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbNbufqDs7mPQomfpjydpKthZIVln5-hY',
  authDomain: 'minion-e482a.firebaseapp.com',
  databaseURL: 'https://minion-e482a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'minion-e482a',
  storageBucket: 'minion-e482a.appspot.com',
  messagingSenderId: '667450887836',
  appId: '1:667450887836:web:dd8df2598ec1e683a76759',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
