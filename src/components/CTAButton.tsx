"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

const MotionLink = motion(Link);

export default function CTAButton({
  href,
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: Props) {
  const base = `inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red to-[#ff8a3c] px-5 py-2 font-jakarta font-semibold text-fg shadow-[0_0_12px_rgba(139,15,18,0.4)] transition-all animate-[pulse_8s_ease-in-out_infinite] ${
    disabled ? "cursor-not-allowed opacity-50" : "hover:to-red-dim hover:shadow-[0_0_20px_rgba(229,9,20,0.6)]"
  }`;
  const motionProps = disabled
    ? {}
    : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.97 } };
  if (href) {
    return (
      <MotionLink
        href={href}
        className={`${base} ${className}`}
        {...motionProps}
        onClick={onClick}
      >
        {children}
      </MotionLink>
    );
  }
  return (
    <motion.button
      className={`${base} ${className}`}
      {...motionProps}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
}
