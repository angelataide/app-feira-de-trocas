export default function FeatureCard({ icon, title, children, iconBgClass }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div
                className={`w-12 h-12 ${iconBgClass} rounded-full flex items-center justify-center mb-4`}
            >
                {icon}
            </div>
            <h3 className="text-lg font-bold text-neutral-800 mb-1">{title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
                {children}
            </p>
        </div>
    );
}
