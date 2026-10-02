function ContactLink({ label, href, text }) {
  return (
    <li>
      <span className="font-semibold mr-2">{label}</span>
      <a href={href} className="text-blue-700 underline hover:text-blue-900">{text}</a>
    </li>
  )
}

export default ContactLink