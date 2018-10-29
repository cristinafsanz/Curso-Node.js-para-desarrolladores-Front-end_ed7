var config = {
  apiKey: "AIzaSyDk9OrOPOoedLf1flgolrrIfc_iGvfSonU",
  authDomain: "curso-nodejs-ae2c7.firebaseapp.com",
  databaseURL: "https://curso-nodejs-ae2c7.firebaseio.com",
  projectId: "curso-nodejs-ae2c7",
  storageBucket: "curso-nodejs-ae2c7.appspot.com",
  messagingSenderId: "849510397610"
};
firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('#login');
  const card = document.querySelector('.card');

  loginButton.addEventListener('click', () => {
    // On login button click

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((data) => {
      window.location.href = window.location.origin + '/map';
    }).catch((error) => {
      alert(error.message);
    });
  });
});
