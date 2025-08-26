import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-16 items-center justify-center border-r border-border bg-bg sm:flex">
      <Link
        href="/"
        className="text-sm font-bold [writing-mode:vertical-rl] rotate-180"
      >
        Affinity
      </Link>
    </aside>
  );
}
