import React from "react";
import { useDispatch } from "react-redux";

import { useAuth0 } from "./auth0/react-auth0-wrapper";
import { userReceived } from "./actions";

export const AvatarRender = ({ user, logout, loginWithRedirect }) => (
    <div className="profile">
      {user ? (
          <>
            <h6>{user.nickname}</h6>
            <Image.Circle
                className="avatar"
                src={user.picture}
                onClick={() => logout()}
            />{" "}
          </>
      ) : (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}
    </div>
);

export const Profile = () => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user) {
      dispatch(userReceived({ user }));
    }
  }, [user]);
  return <ProfileRender {...{ loginWithRedirect, logout, user }} />;
};