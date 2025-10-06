export default function Toast({ title }: { title: string }) {
  return (
    <div className="fixed  bottom-5 left-1/2 -translate-x-1/2 bg-brand text-white text-sm px-4 py-2 rounded-lg shadow-md animate-toastSlide">
      ✅ {title}
    </div>
  );
}
