export default function Button({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      className="gsap-item w-full h-12 text-white rounded-lg border-none focus:outline-none focus:ring-0 bg-brand"
      type="button"
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
}
