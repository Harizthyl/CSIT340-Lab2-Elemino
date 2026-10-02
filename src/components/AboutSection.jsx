import SectionHeading from './SectionHeading'
import Fact from './Fact'

function AboutSection() {
  return (
    <section id="about" className='mb-8'>
        <SectionHeading title="About" subtitle="A little about who I am." />
        <br/>
        <p className="mb-4">
            I mostly grew moving around city to city until my finally settled here at Cebu City
            and I am currently enrolled here at Cebu Institute of Technology - University. 
            I picked up Information Technology program because when I was a kid I was always fascinated by cool hackers.
            But reality is different from fiction, so here I am surviving this course.
        </p>
        <dl >
            <Fact label="Course" value="BS Information Technology" />
            <Fact label="Year level" value="Third year" />
            <Fact label="School" value="CIT-U" />
            <Fact label="Based in" value="Cebu City" />
        </dl>
    </section>
  )
}

export default AboutSection