import { useContext } from "react";
import AuthContext from "../contexts/authContext.js";

export default function useAuth() {
    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }

    return context;
}
