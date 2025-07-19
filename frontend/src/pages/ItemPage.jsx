import { Link, useParams } from "react-router-dom";
import { itensDisponiveis } from "../constants/itensMock";
import { useState } from "react";
import ProposalSuccess from "../components/Item/ProposalSuccess";
import { ArrowLeft, MessageCircle } from "lucide-react";
import ItemImage from "../components/Item/ItemImage";
import ItemInfo from "../components/Item/ItemInfo";
import UserCard from "../components/Item/UserCard";
import ProposalForm from "../components/Item/ProposalForm";

export default function ItemPage() {
    const { id } = useParams();

    const item = itensDisponiveis.find((i) => i.id === parseInt(id));

    const [showPropostaForm, setShowPropostaForm] = useState(false);
    const [propostaEnviada, setPropostaEnviada] = useState(false);

    const handleEnviarProposta = (formData) => {
        console.log("Proposta enviada:", formData);
        setTimeout(() => {
            setPropostaEnviada(true);
            setShowPropostaForm(false);
        }, 1000);
    };

    if (!item) {
        return (
            <div className="min-h-screen bg-neutral-50 flex items-center justify-center text-center">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-800 mb-4">
                        Oops! Item não encontrado.
                    </h1>
                    <Link
                        to="/explorar"
                        className="font-semibold text-primary-600 hover:underline"
                    >
                        Voltar para a exploração
                    </Link>
                </div>
            </div>
        );
    }

    if (propostaEnviada) {
        return <ProposalSuccess />;
    }

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Link
                        to="/explorar"
                        className="flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-primary-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para a exploração
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ItemImage src={item.imagem} alt={item.titulo} />
                    <div>
                        <ItemInfo item={item} />
                        <UserCard item={item} />
                        {!showPropostaForm ? (
                            <button
                                onClick={() => setShowPropostaForm(true)}
                                className="w-full h-12 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Propor Troca
                            </button>
                        ) : (
                            <ProposalForm
                                onCancel={() => setShowPropostaForm(false)}
                                onSubmit={handleEnviarProposta}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
