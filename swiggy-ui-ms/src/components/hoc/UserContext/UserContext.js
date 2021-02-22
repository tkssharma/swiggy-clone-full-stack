import React, { Component, createContext } from "react";
export const UserContext = createContext({ user: null })
import { auth } from "../../../firebase/firebase";

export class UserProvider extends Component {
    state = {
        user: null
    };
    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {
            this.setState(userAuth);
        });
    };

    render() {
        const { user } = this.state;
        return (
            <UserContext.Provider value={user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;