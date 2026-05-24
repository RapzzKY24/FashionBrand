"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const PAGE_ORDER = ["/auth/login", "/auth/register"];

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const prevIndex = PAGE_ORDER.indexOf(prevPath.current);
    const currIndex = PAGE_ORDER.indexOf(pathname);
    setDirection(currIndex > prevIndex ? 1 : -1);
    prevPath.current = pathname;
  }, [pathname]);

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
