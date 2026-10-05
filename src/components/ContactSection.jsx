import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Contact me at the following:" />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:briarelemino1945@gmail.com" text="briarelemino1945@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/Harizthyl" text="github.com/Harizthyl" />
        <ContactLink label="School Email" href="mailto:briarrovic.elemino@cit.edu" text="briarrovic.elemino@cit.edu" />
      </ul>
    </section>
  )
}

export default ContactSection