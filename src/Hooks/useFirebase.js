import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/Firebase.init";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  // get current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    // error,
    googleSignIn,
    logout,
  };
};
export default useFirebase;
