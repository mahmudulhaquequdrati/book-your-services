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
  //   const [error, setError] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // get current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    setUser,
    // error,
    googleSignIn,
    logout,
  };
};
export default useFirebase;
