import { useState } from "react";
import { motion } from "framer-motion";
import About from "./About"; // Import the About component
import Contact from "./Contact";
import Projects from "./Projects";

function Home() {
  const [activeSection, setActiveSection] = useState("home"); // State to track the active section

  const handleNavigation = (section) => {
    setActiveSection(section); // Update state to switch sections
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="home-container"
    >
      <nav className="navbar">
        <h1 className="navbar-title">Portfolio</h1>
        <ul className="navbar-links">
          <li>
            <button onClick={() => handleNavigation("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("contact")}>Contact</button>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {activeSection === "home" && (
            <>
              <h1 className="hero-title">Hi, I'm Kadhir Senthilkumar</h1>
    <h2 className="hero-subtitle">Full-Stack Developer & DevOps Engineer</h2>
    <p className="hero-description">
      Passionate **Full-Stack Developer & DevOps Engineer** with a strong
      background in building scalable web applications and automating CI/CD 
      pipelines. I specialize in **React, Node.js, Spring Boot, and MongoDB** 
      for full-stack development, and **Docker, Kubernetes, Jenkins, and Terraform** 
      for DevOps automation.  
      <br /><br />
      I thrive on solving real-world problems by integrating development and 
      operations seamlessly, ensuring high availability, security, and performance 
      of cloud-native applications. I have hands-on experience in implementing 
      **CI/CD pipelines**, monitoring systems using **Prometheus & Grafana**, 
      and container orchestration with **Kubernetes**.  
      <br /><br />
      I am constantly learning and exploring new technologies to optimize 
      workflows, reduce deployment times, and enhance application scalability.  
      Let's build something amazing together!
    </p>
            </>
          )}
          {activeSection === "about" && <About />} {/* Render About component */}
          {activeSection === "projects" && <Projects />}
          {activeSection === "contact" && <Contact />}
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Home;
