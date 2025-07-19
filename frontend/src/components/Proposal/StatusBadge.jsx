import { Clock, CheckCircle, XCircle } from "lucide-react";

export default function StatusBadge({ status }) {
    const statusInfo = {
        pendente: {
            text: "Pendente",
            icon: <Clock className="w-4 h-4" />,
            classes: "bg-yellow-100 text-yellow-800",
        },
        aceita: {
            text: "Aceita",
            icon: <CheckCircle className="w-4 h-4" />,
            classes: "bg-green-100 text-green-800",
        },
        recusada: {
            text: "Recusada",
            icon: <XCircle className="w-4 h-4" />,
            classes: "bg-red-100 text-red-800",
        },
    }[status] || {
        text: "Desconhecido",
        icon: <Clock className="w-4 h-4" />,
        classes: "bg-gray-100 text-gray-800",
    };

    return (
        <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusInfo.classes}`}
        >
            {statusInfo.icon}
            {statusInfo.text}
        </div>
    );
}
