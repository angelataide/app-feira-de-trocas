import { useState, useEffect } from "react";
import AuthContext from "./authContext";
import { jwtDecode } from "jwt-decode";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem("authToken"));
    const [logoutTimer, setLogoutTimer] = useState(null);

    useEffect(() => {
        if (token) {
            try {
                const { exp } = jwtDecode(token);
                const isExpired = exp * 1000 < Date.now();

                if (isExpired) {
                    handleLogout();
                } else {
                    const storedUser = localStorage.getItem("user");
                    if (storedUser) {
                        setUser(JSON.parse(storedUser));
                    }

                    const timeout = exp * 1000 - Date.now();
                    const timerId = setTimeout(() => handleLogout(), timeout);
                    setLogoutTimer(timerId);
                }
            } catch (error) {
                console.log("Erro ao decodificar o token:", error);

                handleLogout();
            }
        } else {
            setUser(null);
        }

        return () => {
            if (logoutTimer) clearTimeout(logoutTimer);
        };
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
    };

    const login = (userData, authToken) => {
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("user", JSON.stringify(userData));
        setToken(authToken);
        setUser(userData);
    };

    const isAuthenticated = !!token;

    const value = { user, token, isAuthenticated, login, logout: handleLogout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
