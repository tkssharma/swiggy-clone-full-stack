import React, { useEffect, useState, createContext } from "react";
import { firebaseAuth } from "../../../firebase/firebase";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/auth/auth.slice";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = firebaseAuth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        const token = await userAuth.getIdToken(true);
        const email = userAuth.email;
        console.log(userAuth);

        dispatch(loginSuccess({ token, email, name: userAuth.displayName, username: email }));
        localStorage.setItem("access_token", token);
        setUser(userAuth);
      }
    });
    return () => subscription();
  }, []);
  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
};

export { UserProvider };
