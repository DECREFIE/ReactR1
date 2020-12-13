import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: "AIzaSyCkmY4iyAmiE-S6kMj_VXwxTJ0jYj3yPMc",
  authDomain: "fir-project-2afd2.firebaseapp.com",
  databaseURL: "https://fir-project-2afd2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-project-2afd2",
  storageBucket: '',
  messagingSenderId: "439089848982",
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
    // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}
// *** Auth API ***


export default Firebase;
