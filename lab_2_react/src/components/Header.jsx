function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 p-8 text-center flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight mb-2">
        Volodymyr Romanyuk
      </h1>
      <p className="text-lg font-semibold text-sky-400 tracking-wider uppercase mb-4">
        Junior SOC Analyst
      </p>
      <div className="text-slate-400 text-sm md:text-base space-y-1">
        <p className="font-medium text-slate-300">Львів, Україна</p>
        <p className="flex flex-wrap justify-center gap-3 pt-2">
          <a href="https://github.com/inflMETEOR" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 hover:underline transition">
            GitHub
          </a>
          <span>|</span>
          <a href="mailto:vromanyukjr@gmail.com" className="text-sky-400 hover:text-sky-300 hover:underline transition">
            Email
          </a>
          <span>|</span>
          <a href="https://t.me/@DRAGON50080" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 hover:underline transition">
            Telegram
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
