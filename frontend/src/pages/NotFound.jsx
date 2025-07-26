import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-50 font-sans text-neutral-900 p-6">
            <h1 className="text-7xl font-extrabold mb-4">404</h1>
            <p className="text-xl mb-6">Página não encontrada.</p>
            <div className="flex gap-4">
                <button
                    onClick={() => navigate("/explorer")}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:brightness-90 transition"
                >
                    Ir para Explorer
                </button>
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 bg-neutral-300 text-neutral-900 rounded-lg font-semibold hover:bg-neutral-400 transition"
                >
                    Ir para Home
                </button>
            </div>
        </div>
    );
}
