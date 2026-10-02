function ProjectCard({ year, title, description, tech, link }) {
  return (
    <article className="mb-5">
      <p className="mb-4">{year}</p>
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <p className="mb-4">{description}</p>
      <p className="mb-4">{tech}</p>
      <a href={link} className="text-blue-700 underline hover:text-blue-900">View on GitHub</a>
    </article>
  )
}

export default ProjectCard