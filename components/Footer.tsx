export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Monroe Gollaher. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/MonroeGollaher"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://rb.gy/srpbts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://rb.gy/kb8lcq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            Instagram
          </a>
          <a
            href="mailto:mgollaher92@gmail.com"
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
