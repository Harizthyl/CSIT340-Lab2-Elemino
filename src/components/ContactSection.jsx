import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

function ContactSection() {
  return (
    <section id="contact" className="mb-8">
      <SectionHeading title="Contact" subtitle="Say hi!" />
      <br/>
      <ul className="list-disc pl-10">
        <ContactLink
          label="Email"
          href="mailto:briarelemino1945@gmail.com"
          text="briarelemino1945@gmail.com"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/Harizthyl"
          text="github.com/Harizthyl"
        />
        <ContactLink
          label="Institutional Email"
          href="mailto:briarrovic.elemino@cit.edu"
          text="briarrovic.elemino@cit.edu"
        />
      </ul>
    </section>
  );
}


export default ContactSection;