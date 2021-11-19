import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

import img from "../../images/btn_google_light_pressed_hdpi.9.png";

const Login = () => {
  const { googleSignIn, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="text-center text-2xl font-bold py-12 my-24 border w-1/4 mx-auto rounded-lg shadow-lg">
      <h2>Please Login Here !!</h2>
      <button
        onClick={handleGoogleSignIn}
        className="my-4 text-xl bg-red-500 text-white py-2 px-4 rounded-3xl "
      >
        <img className="inline w-8 pr-1" src={img} alt="" />
        Google signin
      </button>
    </div>
  );
};

export default Login;
