import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {};

const firebse = Firebase.initializeApp(config);

export { firebse };
