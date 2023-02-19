import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword,signOut } from 'firebase/auth'
import { auth } from '../components/firebase-config';


export const authContext = createContext(null);



export const AuthContextProvider = ({ children }) => {
  const [ registerEmail, setRegisteremail] = useState('');
  const [ registerPassword, setRegisterPassword] = useState('');
  const [ loginEmail, setLoginEmail] = useState('');
  const [ loginPassword, setLoginPassword] = useState('');
  const [ parentName, setParentName] = useState('')

  
  useEffect(( ) => {
    onAuthStateChanged(auth, (current) => {
      console.log(current)
    })
  } )

  const register = async () => {
    try {
        const userLogin = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
    } catch (error) {
      console.log(error.message)
    }
  }
  const login = async () => {
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
        console.log(user)
    } catch (error) {
    }
  }
  const logout = async () => {
      await signOut(auth)
  }


const value = {
  registerEmail,
  login,
  logout,
  register,
  registerPassword,
  setRegisteremail,
  setRegisterPassword,
  loginEmail,
  setLoginEmail,
  setLoginPassword,
  loginPassword,
  parentName,
  setParentName
}

  return (
    <authContext.Provider value={value}> {children} </authContext.Provider>
  );
};

export default authContext;