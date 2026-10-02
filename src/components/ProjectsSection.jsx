import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-8">
      <SectionHeading title="Projects" subtitle="Things I have built." />
        <br/>
      <ProjectCard
        year="2026"
        title="About Me in React"
        description="My first React project, rebuilt from portfolio.html lol"
        tech="React · Tailwind CSS"
        link="https://github.com/Harizthyl/CSIT340-Lab2-Elemino"
      />

      <ProjectCard
        year="2026"
        title="Labtrak"
        description="Personal laboratory inventory management system"
        tech="React · Tailwind CSS"
        link="https://github.com/Harizthyl/LabTrack"
      />

      <ProjectCard
        year="2026"
        title="GradeBit"
        description="A mobile application that tracks your grades and calculates the needed score required to pass the course."
        tech="Android Studio · Kotlin"
        link="https://github.com/SharkSnow-123/GradeBit-Terminal-"
      />

      <ProjectCard
        year="2025"
        title="Butcherman"
        description="Butcherman is a game that combines the classic Hangman with elements of a visual novel."
        tech="GDScript"
        link="https://github.com/SharkSnow-123/Butcherman-Game"
      />

    </section>
  );
}