import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/HomePage/Navbar";

export default function MainLayout() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div>
            <Navbar forceLoggedOut={isHome} />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
