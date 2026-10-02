export default function Hero() {
  return (
    <header className="mb-8">
      <p className="mb-2">Hi, I'm</p>
      <h1 className="text-3xl font-bold mb-4">Briar Rovic Z. Elemino</h1>
      <p className="mb-4">
        A third year IT student who builds small web apps for the people around me.
      </p>
      <div className="flex gap-2">
        <a href="#projects" className="text-blue-700 underline hover:text-blue-900">
          See my projects
        </a>
        <a href="#contact" className="text-blue-700 underline hover:text-blue-900">
          Contact me
        </a>
      </div>
    </header>
  );
}