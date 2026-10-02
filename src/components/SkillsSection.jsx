import SectionHeading from './SectionHeading'
import SkillTag from './SkillTag'

function SkillsSection() {
  return (
    <section id="skills" className='mb-8'>
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div>
        <div className='mb-4'>
          <br/>
          <h3 className='font-bold mb-4'>Languages</h3>
          <div className="flex gap-2">
            <SkillTag name="C" />
            <SkillTag name="C++" />
            <SkillTag name="JavaScript" />
            <SkillTag name="Java" />
          </div>
        </div>
        <div className='mb-4'>
          <h3 className='font-bold mb-4'>Frameworks</h3>
          <div className="flex gap-2">
            <SkillTag name="React" />
            <SkillTag name="Tailwind CSS" />
            <SkillTag name="Bootstrap" />
          </div>
        </div>
        <div className='mb-4'> 
          <h3 className='font-bold mb-4'>Tools</h3>
          <div className="flex gap-2">
            <SkillTag name="Git" />
            <SkillTag name="VS Code" />
            <SkillTag name="MySQL" />
            <SkillTag name="Figma" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection