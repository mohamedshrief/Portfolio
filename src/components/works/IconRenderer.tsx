export default function IconRenderer({
  icon,
  alt,
}: {
  icon: string;
  alt?: string;
}) {
  if (!icon) return null;
  if (typeof icon === "string") {
    return (
      <img
        src={icon}
        alt={alt}
        className="w-8 h-8 object-contain rounded-sm"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }
}
