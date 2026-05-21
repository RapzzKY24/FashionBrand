"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./variants";

export function ProductGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

export function ProductGridItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <motion.div variants={staggerItem}>{children}</motion.div>;
}
