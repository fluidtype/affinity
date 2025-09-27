import { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/15 bg-black/60 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
