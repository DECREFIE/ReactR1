import app from 'firebase/app';
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
  }
}
export default Firebase;
