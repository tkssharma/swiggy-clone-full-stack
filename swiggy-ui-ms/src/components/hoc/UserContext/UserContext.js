import React, { useEffect,useState, createContext } from "react";
import { auth } from "../../../firebase/firebase";
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";


export const UserContext = createContext({ user: null })

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        const subscription = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const token = await userAuth.getIdToken(true);
                console.log(token);
                const email = userAuth.email;
                dispatch({ type: 'LOGIN_SUCCESS', data: {token, email} });
                localStorage.setItem('access_token', token);
                setUser(userAuth);
            }
        });
       return () => subscription();
    }, [])
        return (
            <UserContext.Provider value={user}>
                {props.children}
            </UserContext.Provider>
    );
};

export { UserProvider};
