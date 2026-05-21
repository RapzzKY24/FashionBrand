"use client";

import { motion } from "framer-motion";
import { slideUp } from "./variants";
import type { Variants } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  variant?: Variants;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "span";
};

export default function Reveal({
  children,
  variant = slideUp,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const customVariant: Variants = {
    hidden: variant.hidden,
    visible: {
      ...variant.visible,
      transition: {
        ...(variant.visible as { transition?: object })?.transition,
        delay,
      },
    },
  };

  const MotionTag = motion[as as keyof typeof motion] as React.ElementType;

  return (
    <MotionTag
      className={className}
      variants={customVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </MotionTag>
  );
}
