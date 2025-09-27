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
  variant?: "gradient" | "dark";
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
  variant = "gradient",
}: Props) {
  const variantBaseClasses =
    variant === "dark"
      ? "relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/60 px-5 py-2 font-body font-semibold text-white shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 before:absolute before:inset-[-18%] before:-z-10 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_center,rgba(255,70,70,0.65),rgba(255,70,70,0)_70%)] before:opacity-90 before:transition-opacity before:duration-300 before:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
      : "inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF2D2D] to-[#FF7A7A] px-5 py-2 font-body font-semibold text-white transition-all";

  const enabledStateClasses =
    variant === "dark"
      ? "hover:border-red/40 hover:shadow-[0_35px_70px_rgba(0,0,0,0.65)] hover:before:opacity-100"
      : "hover:to-red-dim";

  const disabledStateClasses = "cursor-not-allowed opacity-50";

  const base = `${variantBaseClasses} ${disabled ? disabledStateClasses : enabledStateClasses}`;

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
  const content =
    variant === "dark"
      ? (
          <span className="bg-gradient-to-r from-[#FF2D2D] via-[#FF4A4A] to-[#FF7A7A] bg-clip-text text-transparent">
            {children}
          </span>
        )
      : (
          children
        );
  if (href) {
    return (
      <MotionLink
        href={href}
        className={`${base} ${className}`}
        {...motionProps}
        onClick={onClick}
        style={styleWithTouchAction}
      >
        {content}
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
      {content}
    </motion.button>
  );
}
