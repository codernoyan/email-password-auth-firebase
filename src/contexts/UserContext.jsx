/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable linebreak-style */
import {
  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // firebase authentication
  const createUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribeUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribeUser();
  }, []);
  const autInfo = {
    user, loading, createUser, signIn, logOut,
  };
  return (
    <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>
  );
}

export default UserContext;
