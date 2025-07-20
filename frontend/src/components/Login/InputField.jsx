export default function InputField({
    id,
    type,
    placeholder,
    icon,
    value,
    onChange,
}) {
    return (
        <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-500/70">
                {icon}
            </div>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                className="w-full h-12 pl-10 pr-4 border rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 border-neutral-200"
            />
        </div>
    );
}
