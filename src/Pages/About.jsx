import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="about-container"
    >
      <h2>About Me</h2>
      <p>
        I am a passionate developer dedicated to creating seamless user experiences
        and writing clean, efficient code.
      </p>
    </motion.div>
  );
}

export default About;
