import { Outlet } from "react-router-dom";
import Navbar from "../components/HomePage/Navbar";

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
