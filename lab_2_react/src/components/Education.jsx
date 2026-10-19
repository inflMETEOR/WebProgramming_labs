function Education() {
  return (
    <section className="bg-slate-900/60 p-6 rounded-xl border-l-4 border-sky-400 border-y border-r border-slate-700/50 hover:shadow-lg hover:shadow-sky-500/5 transition">
      <h2 className="text-xl font-bold text-slate-100 mb-3 border-b border-slate-700 pb-2">
        Освіта
      </h2>
      <article className="bg-slate-800 p-4 rounded-lg border border-slate-700">
        <h3 className="text-lg font-semibold text-sky-400 hover:underline">
          <a href="https://lpnu.ua" target="_blank" rel="noreferrer">
            Національний університет "Львівська політехніка"
          </a>
        </h3>
        <p className="text-slate-300 text-sm mt-1">
          Спеціальність — <strong>"Кібербезпека"</strong> | 2025 – 2029
        </p>
      </article>
    </section>
  );
}

export default Education;