import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav>
      <a href="#top">
        Briar Rovic Z. Elemino
      </a>
      <div>
        <NavLink href="#about" label="About " />
        <NavLink href="#skills" label="Skills " />
        <NavLink href="#projects" label="Projects " />
        <NavLink href="#experience" label="Experience " />
        <NavLink href="#contact" label="Contact " />
      </div>
    </nav>
  );
}

export default Navbar;