import app from '../../Firebase/config';
import 'firebase/auth';

export default {
  signIn: (email, password) =>
    app.auth().signInWithEmailAndPassword(email, password),
  signOut: () => app.auth().signOut(),
  onChange: (callback) => app.auth().onAuthStateChanged(callback),
};
