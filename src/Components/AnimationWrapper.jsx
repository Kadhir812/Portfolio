import { motion } from "framer-motion";

function AnimationWrapper({ children }) {
  const animation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return <motion.div {...animation}>{children}</motion.div>;
}

export default AnimationWrapper;
