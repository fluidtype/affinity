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
  const base = `inline-flex items-center justify-center rounded-md bg-red px-5 py-2 font-semibold text-fg shadow-[0_0_8px_rgba(229,9,20,0.15)] transition-colors ${
    disabled ? "cursor-not-allowed opacity-50" : "hover:bg-red-dim"
  }`;
  const motionProps = {
    whileHover: disabled
      ? {}
      : { y: -2, boxShadow: "0 0 8px rgba(229,9,20,0.3)" },
    whileTap: disabled ? {} : { y: 1 },
  };
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
