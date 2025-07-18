import { Heart, Waves } from "lucide-react";

export default function InfoFooterCard() {
    return (
        <div className="mt-8 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/80 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <Waves className="w-5 h-5 text-purple-500" />
                </div>
                <p className="text-neutral-500 leading-relaxed">
                    Ao se cadastrar, você se junta a uma comunidade que valoriza
                    a{" "}
                    <span className="font-semibold text-purple-600">
                        sustentabilidade
                    </span>{" "}
                    e o{" "}
                    <span className="font-semibold text-pink-600">
                        compartilhamento consciente
                    </span>
                    .
                </p>
            </div>
        </div>
    );
}
