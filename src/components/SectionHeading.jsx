export default function SectionHeading({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" >{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}