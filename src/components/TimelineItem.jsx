function TimelineItem({ period, title, place, description }) {
  return (
    <li className="mb-4">
      <p className="mb-4">{period}</p>
      <h3 className="mb-4 font-bold">{title}</h3>
      <p className="mb-4">{place}</p>
      <p>{description}</p>
    </li>
  )
}

export default TimelineItem