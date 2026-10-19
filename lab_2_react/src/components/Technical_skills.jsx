function Technical_skills() {
  return (
    <section className="bg-slate-900/60 p-6 rounded-xl border-l-4 border-sky-400 border-y border-r border-slate-700/50 hover:shadow-lg hover:shadow-sky-500/5 transition">
      <h2 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">
        Технічні навички
      </h2>
      <ul className="space-y-3">
        <li className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-slate-300">
          <strong className="text-sky-400">Мови програмування:</strong> Python, JavaScript
        </li>
        <li className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-slate-300">
          <strong className="text-sky-400">Інструменти та середовища:</strong> Git, GitHub, VS Code
        </li>
        <li className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-slate-300">
          <strong className="text-sky-400">Бази даних та мережі:</strong> Реляційні БД, нормалізація, базові протоколи
        </li>
        <li className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-slate-300">
          <strong className="text-sky-400">Креативне мислення:</strong> Переможець конкурсу бізнес проєктів від банку
        </li>
        <li className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-slate-300">
          <strong className="text-sky-400">Володіння мовами:</strong> Англійська — В2, Польська — А2, Українська — Native, Російська — Native
        </li>
      </ul>
    </section>
  );
}

export default Technical_skills;