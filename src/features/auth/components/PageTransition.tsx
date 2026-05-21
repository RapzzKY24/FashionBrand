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
        initial={{ opacity: 0, x: 40 * direction }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 * direction }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
