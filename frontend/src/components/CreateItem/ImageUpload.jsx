import { Camera, Upload } from "lucide-react";

export default function ImageUpload() {
    return (
        <div className="space-y-2">
            <label className="font-semibold text-neutral-800">
                Fotos do Item
            </label>
            <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center transition-colors hover:border-primary-500">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Camera className="w-8 h-8 text-white" />
                </div>
                <p className="text-neutral-800 font-semibold mb-2">
                    Clique para adicionar ou arraste e solte aqui
                </p>
                <p className="text-sm text-neutral-500 mb-4">
                    PNG, JPG até 5MB cada (máximo 5 fotos)
                </p>
                <button
                    type="button"
                    className="h-10 px-4 flex items-center justify-center gap-2 mx-auto bg-white border border-neutral-200 text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
                >
                    <Upload className="w-4 h-4" />
                    Selecionar Fotos
                </button>
            </div>
        </div>
    );
}
