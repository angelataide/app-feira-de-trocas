export default function FormField({ id, label, type = "input", ...props }) {
    const Component = type;
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="font-semibold text-neutral-800">
                {label}
            </label>
            <Component
                id={id}
                {...props}
                className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/70"
            />
        </div>
    );
}
