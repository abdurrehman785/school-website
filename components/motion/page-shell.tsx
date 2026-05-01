"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export function PageShell({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
