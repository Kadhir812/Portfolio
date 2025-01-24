import AnimationWrapper from "../Components/AnimationWrapper";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    title: "Railway Reservation System",
    description: "A system for booking and managing tickets using Java, JDBC, and MySQL.",
    link: "https://github.com/Kadhir812/JDBC",
  },
  {
    title: "Placement Portal",
    description: "A portal for job applications using React, Node.js, Express, and MySQL.",
    link: "https://github.com/Kadhir812/Placement-Portal",
  },
  {
    title: "MERN To-Do App",
    description: "A CRUD application with Docker containerization.",
    link: "https://hub.docker.com/repositories",
  },
  {
    title: "CI/CD Pipeline for React App",
    description: "Automated deployment using Jenkins and Docker.",
    link: "https://github.com/Kadhir812/Automated-Testing-and-Deployment-Pipeline-for-React-App",
  },
];

function Projects() {
  return (
    <AnimationWrapper>
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </AnimationWrapper>
  );
}

export default Projects;
