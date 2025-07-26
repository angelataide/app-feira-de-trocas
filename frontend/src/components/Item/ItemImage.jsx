export default function ItemImage({ src, alt }) {
    return (
        <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-contain" />
        </div>
    );
}
