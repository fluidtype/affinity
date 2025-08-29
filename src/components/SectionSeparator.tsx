export default function SectionSeparator({ className = "" }: { className?: string }) {
  return (
    <div
      className={`my-6 sm:my-10 h-px w-full bg-gradient-to-r from-transparent via-red to-transparent blur-sm ${className}`}
    />
  );
}
