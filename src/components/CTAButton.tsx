"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  type CSSProperties,
  type ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from "react";

const MotionLink = motion(Link);

type BaseProps = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

type LinkCTAProps = {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children" | "style">;

type ButtonCTAProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children" | "style"
> & { href?: undefined };

type CTAButtonProps = BaseProps & (LinkCTAProps | ButtonCTAProps);

function useIsTouch() {
  const [isTouch, setIsTouch] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return isTouch;
}

const motionInteraction = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring" as const, stiffness: 500, damping: 15 },
} as const;

function baseClasses(disabled: boolean) {
  return `inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF2D2D] to-[#FF7A7A] px-5 py-2 font-jakarta font-semibold text-fg shadow-[0_0_12px_rgba(255,45,45,0.45)] transition-all ${
    disabled
      ? "cursor-not-allowed opacity-50"
      : "hover:to-red-dim hover:shadow-[0_0_20px_rgba(255,45,45,0.6)]"
  }`;
}

export default function CTAButton(props: CTAButtonProps) {
  const isTouch = useIsTouch();

  if ("href" in props && props.href) {
    const { href, className = "", children, style, ...rest } = props;
    const restRecord = rest as Record<string, unknown>;
    const hasDisableAttr = Object.prototype.hasOwnProperty.call(
      restRecord,
      "data-disable-motion-on-touch"
    );
    const disableAttrValue = hasDisableAttr
      ? (restRecord["data-disable-motion-on-touch"] as string | undefined)
      : undefined;
    const disableAlways =
      typeof disableAttrValue === "string" &&
      disableAttrValue.toLowerCase() === "always";
    const shouldDisableMotion =
      disableAlways || (isTouch ?? hasDisableAttr) === true;
    const motionProps = shouldDisableMotion ? undefined : motionInteraction;

    return (
      <MotionLink
        href={href}
        className={`${baseClasses(false)} ${className}`}
        style={{ touchAction: "manipulation", ...(style ?? {}) }}
        {...(motionProps ?? {})}
        {...rest}
      >
        {children}
      </MotionLink>
    );
  }

  const {
    className = "",
    children,
    style,
    disabled = false,
    type = "button",
    ...rest
  } = props;

  const restRecord = rest as Record<string, unknown>;
  const hasDisableAttr = Object.prototype.hasOwnProperty.call(
    restRecord,
    "data-disable-motion-on-touch"
  );
  const disableAttrValue = hasDisableAttr
    ? (restRecord["data-disable-motion-on-touch"] as string | undefined)
    : undefined;
  const disableAlways =
    typeof disableAttrValue === "string" &&
    disableAttrValue.toLowerCase() === "always";
  const shouldDisableMotion =
    disabled || disableAlways || (isTouch ?? hasDisableAttr) === true;
  const motionProps = shouldDisableMotion ? undefined : motionInteraction;

  return (
    <motion.button
      className={`${baseClasses(disabled)} ${className}`}
      style={{ touchAction: "manipulation", ...(style ?? {}) }}
      disabled={disabled}
      type={type}
      {...(motionProps ?? {})}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
