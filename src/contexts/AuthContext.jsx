import { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseEnv';
import axios from 'axios';

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  // const [userData, setUserData] = useState();
  const value = {
    user,
    // userData,
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user)
      // axios.get('http://localhost:8080/users/me/'+user.uid)
      // .then((res) => {
      //   console.log(res.data)
      //   setUserData(res.data)
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}