"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const PAGE_ORDER = ["/auth/login", "/auth/register"];

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  const prevIndex = PAGE_ORDER.indexOf(prevPath.current);
  const currIndex = PAGE_ORDER.indexOf(pathname);
  const isForward = currIndex > prevIndex;

  prevPath.current = pathname;

  const direction = isForward ? 1 : -1;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
        initial={{ opacity: 0, x: 120 * direction, scale: 0.92 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -120 * direction, scale: 0.92 }}
        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        style={{ perspective: 1200 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
