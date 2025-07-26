export default function SelectField({
    id,
    label,
    value,
    onChange,
    placeholder,
    options,
}) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="font-semibold text-neutral-800">
                {label}
            </label>
            <select
                id={id}
                value={value}
                onChange={onChange}
                className="w-full h-12 px-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((opt) => (
                    <option key={opt.value || opt} value={opt.value || opt}>
                        {opt.label || opt}
                    </option>
                ))}
            </select>
        </div>
    );
}
