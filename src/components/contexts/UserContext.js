/** @format */

import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import _ from "lodash";
const Context = React.createContext();

export const UserStore = ({ children }) => {
    const [cookies, setCookie] = useCookies(["auth_token"]);
    const [authToken, setAuthToken] = useState(cookies["auth_token"]);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (authToken && _.isEmpty(cookies)) {
            setCookie("auth_token", authToken.token);
            setUserInfo(authToken.info);
        }
    }, [authToken]);

    useEffect(() => {
        if (!_.isEmpty(cookies)) {
            const getData = async () => {
                try {
                    const response = await fetch(
                        "https://forked-student-dashboard.herokuapp.com/user",
                        {
                            method: "POST",
                            mode: "cors",
                            credentials: "include",
                            body: JSON.stringify({ token: authToken }),
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                    const data = await response.json();
                    setUserInfo(data);
                } catch (error) {
                    console.log(error);
                }
            };
            getData();
        }
    }, []);

    console.log(userInfo);

    return (
        <Context.Provider value={[authToken, setAuthToken, userInfo, setUserInfo]}>
            {children}
        </Context.Provider>
    );
};

export default Context;
