"use client";

import { motion, useReducedMotion } from "framer-motion";
import { isValidElement, useMemo } from "react";
import type { ElementType, ReactElement, ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
  asChild?: boolean;
};

export default function PageTransition({
  children,
  asChild = false,
}: PageTransitionProps) {
  const reduce = useReducedMotion();
  const motionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: reduce ? 0 : 0.2, ease: "easeOut" },
  } as const;

  const childElement = isValidElement(children)
    ? (children as ReactElement)
    : null;
  const childType = childElement?.type as ElementType | undefined;

  const MotionComponent = useMemo(() => {
    if (!asChild || !childType) return null;
    return motion.create(childType);
  }, [asChild, childType]);

  if (asChild && childElement && MotionComponent) {
    return (
      <MotionComponent
        key={childElement.key ?? undefined}
        {...childElement.props}
        {...motionProps}
      />
    );
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
}
