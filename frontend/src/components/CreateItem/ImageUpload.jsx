import { useRef, useState } from "react";
import { Camera, Upload } from "lucide-react";

export default function ImageUpload({ onFileSelected }) {
    const inputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        if (onFileSelected) onFileSelected(file);
    };

    return (
        <div className="space-y-2">
            <label className="font-semibold text-neutral-800">
                Foto do Item
            </label>

            <input
                type="file"
                ref={inputRef}
                onChange={handleChange}
                accept="image/png, image/jpeg"
                className="hidden"
            />

            <div
                className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center transition-colors hover:border-primary-500 cursor-pointer"
                onClick={handleClick}
                onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files[0];
                    setSelectedFile(file);
                    if (onFileSelected) onFileSelected(file);
                }}
                onDragOver={(e) => e.preventDefault()}
            >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Camera className="w-8 h-8 text-white" />
                </div>
                <p className="text-neutral-800 font-semibold mb-2">
                    Clique para adicionar ou arraste e solte aqui
                </p>
                <p className="text-sm text-neutral-500 mb-4">
                    PNG, JPG até 5MB
                </p>

                <button
                    type="button"
                    className="h-10 px-4 flex items-center justify-center gap-2 mx-auto bg-white border border-neutral-200 text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
                    onClick={handleClick}
                >
                    <Upload className="w-4 h-4" />
                    Selecionar Foto
                </button>

                {selectedFile && (
                    <p className="mt-4 text-neutral-700 text-sm text-left">
                        {selectedFile.name} -{" "}
                        {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                )}
            </div>
        </div>
    );
}
