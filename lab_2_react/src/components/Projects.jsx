function Projects() {
  return (
    <section className="bg-slate-900/60 p-6 rounded-xl border-l-4 border-sky-400 border-y border-r border-slate-700/50 hover:shadow-lg hover:shadow-sky-500/5 transition">
      <h2 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">
        Проєкти
      </h2>
      <div className="space-y-6">
        <article className="bg-slate-800 p-5 rounded-lg border border-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-slate-100">
              Розробка на Python, Git та стандарти стилю коду
            </h3>
            <a 
              href="https://github.com/inflMETEOR/cybersecurity_python-labs/tree/main/labs/lab01" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded transition text-center shrink-0"
            >
              GitHub Code &rarr;
            </a>
          </div>
          <p className="text-sm text-slate-400 mb-3">
            <strong className="text-slate-300">Стек:</strong> Python, Git, GitHub, Шифрування
          </p>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            <li>Написав код для перевірки паролів на відповідність до заданих норм</li>
            <li>Реалізував алгоритм доступів користувачів до ресурсів</li>
            <li>Реалізував модуль для безпечної реєстрації та автентифікації користувачів</li>
          </ul>
        </article>

        <article className="bg-slate-800 p-5 rounded-lg border border-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-slate-100">
              Створення сайту
            </h3>
            <a 
              href="https://github.com/inflMETEOR/re" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded transition text-center shrink-0"
            >
              GitHub Code &rarr;
            </a>
          </div>
          <p className="text-sm text-slate-400 mb-3">
            <strong className="text-slate-300">Стек:</strong> HTML, CSS
          </p>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            <li>Створення візуальної частини сайту</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Projects;