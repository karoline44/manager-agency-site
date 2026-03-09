export default function Navbar() {
    return (
      <nav className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
  
          <div className="text-lg font-semibold">
            Agency
          </div>
  
          <div className="flex gap-6 text-sm">
            <a href="#">Hjem</a>
            <a href="#">Talenter</a>
            <a href="#">Tjenester</a>
            <a href="#">Kontakt</a>
          </div>
  
        </div>
      </nav>
    );
  }