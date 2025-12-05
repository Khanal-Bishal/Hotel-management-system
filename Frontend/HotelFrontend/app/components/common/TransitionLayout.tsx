import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigation } from 'react-router';
import { useEffect, useState, type ReactElement } from 'react';
const getTransitionConfig = (isExiting: boolean) => {
  return {
    initial: { x: isExiting ? 1000 : -1000, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: isExiting ? -1000 : 1000, opacity: 0 },
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  };
};

export function TransitionLayout({ children }: { children: ReactElement }) {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  useEffect(() => {
    if (location.pathname !== prevPath) {
      setPrevPath(location.pathname);
    }
  }, [location.pathname, prevPath]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
        >
          <div className="loading-spinner" />
        </motion.div>
      )}
      <motion.div
        key={location.pathname}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        className="w-full overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
