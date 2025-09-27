"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  style?: CSSProperties;
};

const MotionLink = motion(Link);

const isTouchDevice = () => {
  if (typeof window === "undefined") return false;
  if ("ontouchstart" in window) return true;
  const hasCoarsePointer = window.matchMedia?.("(pointer: coarse)").matches;
  const noHover = window.matchMedia?.("(hover: none)").matches;
  const navigatorTouch =
    typeof navigator !== "undefined" && navigator.maxTouchPoints > 0;
  return Boolean(hasCoarsePointer || noHover || navigatorTouch);
};

export default function CTAButton({
  href,
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  style,
}: Props) {
  const base = `inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF2D2D] to-[#FF7A7A] px-5 py-2 font-body font-semibold text-white transition-all ${
    disabled ? "cursor-not-allowed opacity-50" : "hover:to-red-dim"
  }`;
  const touch = isTouchDevice();
  const motionProps = disabled || touch
    ? {}
    : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring" as const, stiffness: 500, damping: 15 },
      };
  const styleWithTouchAction: CSSProperties = {
    touchAction: "manipulation",
    ...style,
  };
  if (href) {
    return (
      <MotionLink
        href={href}
        className={`${base} ${className}`}
        {...motionProps}
        onClick={onClick}
        style={styleWithTouchAction}
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
      style={styleWithTouchAction}
    >
      {children}
    </motion.button>
  );
}