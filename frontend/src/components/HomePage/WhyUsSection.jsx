import { Handshake, Heart, Recycle, Shield, Users, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function WhyUsSection() {
    return (
        <section className="py-24 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                        Por que escolher o TrocAí?
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
                        Uma plataforma completa para conectar vizinhos e
                        promover a economia circular.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Sustentabilidade"
                        icon={<Recycle className="w-6 h-6 text-white" />}
                        iconBgClass="bg-gradient-to-r from-green-500 to-emerald-500"
                    >
                        Reduza o desperdício e promova a reutilização de itens,
                        contribuindo para um planeta mais sustentável.
                    </FeatureCard>
                    <FeatureCard
                        title="Comunidade Local"
                        icon={<Users className="w-6 h-6 text-white" />}
                        iconBgClass="bg-gradient-to-r from-blue-500 to-purple-500"
                    >
                        Conecte-se com vizinhos do seu bairro e fortaleça os
                        laços da sua comunidade.
                    </FeatureCard>
                    <FeatureCard
                        title="Gratuito e Fácil"
                        icon={<Heart className="w-6 h-6 text-white" />}
                        iconBgClass="bg-gradient-to-r from-pink-500 to-red-500"
                    >
                        Plataforma 100% gratuita com interface intuitiva para
                        facilitar suas trocas.
                    </FeatureCard>
                    <FeatureCard
                        title="Seguro e Confiável"
                        icon={<Shield className="w-6 h-6 text-white" />}
                        iconBgClass="bg-gradient-to-r from-yellow-500 to-orange-500"
                    >
                        Sistema de avaliações e perfis verificados para garantir
                        trocas seguras.
                    </FeatureCard>
                    <FeatureCard
                        title="Rápido e Eficiente"
                        icon={<Zap className="w-6 h-6 text-white" />}
                        iconBgClass="bg-gradient-to-r from-indigo-500 to-blue-500"
                    >
                        Encontre rapidamente o que procura com nosso sistema de
                        busca inteligente.
                    </FeatureCard>
                    <FeatureCard
                        title="Impacto Positivo"
                        icon={<Handshake className="w-6 h-6 text-white" />}
                        iconBgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
                    >
                        Cada troca gera impacto positivo no meio ambiente e na
                        economia local.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
}
