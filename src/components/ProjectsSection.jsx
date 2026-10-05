import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from portfolio.html."
          tech="React · Tailwind CSS"
          link="https://github.com/Harizthyl/CSIT340-Lab2-Elemino"
        />
        <ProjectCard
          year="2026"
          title="Labtrak"
          description="Personal laboratory inventory management system."
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
      </div>
    </section>
  )
}

export default ProjectsSection