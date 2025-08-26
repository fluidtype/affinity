import { ReactNode } from "react";

export default function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-container px-4 ${className}`}>{children}</div>;
}
