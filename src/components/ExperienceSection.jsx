import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <section id="experience" className="mb-8">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <br/>
      <ol className="list-decimal pl-5">
        <TimelineItem
          period="2024 - Present"
          title="BS Information Technology Student"
          place="Cebu Institute of Technology - University"
          description="Studying in Bachelor of Science in Information Technology"
        />
        <TimelineItem
          period="2025 - Present"
          title="Non-Academic Scholar"
          place="Computer Engineering Laboratory"
          description="Assisted faculty members in the office and handles inventory management of the laboratory."
        />
        <TimelineItem
          period="2022 - 2022"
          title="Intern / On-job Training"
          place="Greentech Land Development Corp."
          description="Assigned in the documentation department and did multiple task given by the supervisor."
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;