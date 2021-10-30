import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Confiq";

const initializeAuth = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuth;
