import React from "react";
import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div className="text-center mt-4 h-screen flex justify-center">
      <div>
        <h2 className="mb-4 text-3xl font-bold text-blue-600">Welcome Back</h2>
        <img
          className="mx-auto mb-2 w-20 h-20 rounded-full"
          src={user.photoURL}
          alt=""
        />
        <h2>
          <span className="font-medium">Name</span>: {user.displayName}
        </h2>
        <p>
          <span className="font-medium">Email</span>: {user.email}
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
