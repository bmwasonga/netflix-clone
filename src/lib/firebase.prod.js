import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDr0hDxLvPaUMFRL8428pQUE47QZoEmZpc',
  authDomain: 'netflix-project-5f03b.firebaseapp.com',
  projectId: 'netflix-project-5f03b',
  storageBucket: 'netflix-project-5f03b.appspot.com',
  messagingSenderId: '640846575728',
  appId: '1:640846575728:web:d6cff7da6345f72ee1dcb5',
  measurementId: 'G-CE6V1V8PP3',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
