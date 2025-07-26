export default function HowItWorksSection() {
    const Step = ({ number, title, children, gradientClass }) => (
        <div className="text-center">
            <div className="relative mb-6">
                <div
                    className={`w-16 h-16 ${gradientClass} rounded-full flex items-center justify-center mx-auto shadow-md`}
                >
                    <span className="text-2xl font-bold text-white">
                        {number}
                    </span>
                </div>

                {number < 3 && (
                    <div className="absolute top-8 left-1/2 -z-10 h-20 w-px bg-neutral-200 hidden md:block" />
                )}
            </div>
            <h4 className="text-xl font-bold text-neutral-800 mb-2">{title}</h4>
            <p className="text-neutral-500">{children}</p>
        </div>
    );

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                        Como funciona?
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
                        Em apenas 3 passos simples você já pode começar a
                        trocar.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8">
                    <Step
                        number="1"
                        title="Cadastre seus itens"
                        gradientClass="bg-[linear-gradient(135deg,_#38B2AC_0%,_#3B82F6_100%)]"
                    >
                        Adicione fotos e descrições dos itens que você não usa
                        mais.
                    </Step>
                    <Step
                        number="2"
                        title="Explore e proponha"
                        gradientClass="bg-[linear-gradient(135deg,_#38bdf8_0%,_#0ea5e9_100%)]"
                    >
                        Navegue pelos itens disponíveis na sua região e faça
                        propostas de troca.
                    </Step>
                    <Step
                        number="3"
                        title="Combine e troque"
                        gradientClass="bg-[linear-gradient(135deg,_#3b82f6_0%,_#1d4ed8_100%)]"
                    >
                        Converse com outros usuários e combine os detalhes para
                        realizar a troca.
                    </Step>
                </div>
            </div>
        </section>
    );
}
