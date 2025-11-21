import { type PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PageWrapperProps {}

export const PageWrapper = ({
  children,
}: PropsWithChildren<PageWrapperProps>) => (
  <div style={{ overflow: "hidden" }}>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </div>
);
