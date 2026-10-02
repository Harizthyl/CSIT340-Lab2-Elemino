export default function Fact({ label, value }) {
  return (
    <div>
      <dt className="font-normal">{label}</dt>
      <dd className="ml-6 font-normal">{value}</dd>
    </div>
  );
}