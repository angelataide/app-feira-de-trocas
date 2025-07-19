import { MapPin, Clock } from "lucide-react";

export default function UserCard({ item }) {
    return (
        <div className="bg-white border border-neutral-100 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-primary-600 text-lg">
                    {item.usuario
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                </div>
                <div>
                    <p className="font-semibold text-neutral-800">
                        {item.usuario}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-400">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {item.bairro}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {item.dataPublicacao}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
