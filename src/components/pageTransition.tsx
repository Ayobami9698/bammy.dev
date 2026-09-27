"use client";

import { motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 3, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.main>
  );
}
