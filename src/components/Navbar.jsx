import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="mb-4">
      <div>
        <a href="#top" className="text-blue-700 underline hover:text-blue-900 font-normal">
          Briar Rovic Z. Elemino
        </a>
      </div>
      <div className="flex gap-2 text-blue-700 underline hover:text-blue-900 font-normal">
        <NavLink href="#about" label="About" />
        <NavLink href="#skills" label="Skills" />
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#experience" label="Experience" />
        <NavLink href="#contact" label="Contact" />
      </div>
    </nav>
  );
}