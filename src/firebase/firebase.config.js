/* eslint-disable linebreak-style */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASvo4tKd7UBdrXiF28bxrjHmBXSEQIcl8',
  authDomain: 'email-password-auth-context.firebaseapp.com',
  projectId: 'email-password-auth-context',
  storageBucket: 'email-password-auth-context.appspot.com',
  messagingSenderId: '304627827855',
  appId: '1:304627827855:web:a04ebba46b4591e88e5cfa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
