import React, { useState, useEffect } from 'react';

function Header() {

  const [isLight, setIsLight] = useState(false);


  useEffect(() => {
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 7 && currentHour < 21;

    setIsLight(isDayTime);

    if (isDayTime) {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, []);


  const toggleTheme = () => {
    setIsLight(prev => {
      const nextTheme = !prev;
      if (nextTheme) {
        document.documentElement.classList.add('light-theme');
      } else {
        document.documentElement.classList.remove('light-theme');
      }
      return nextTheme;
    });
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 p-8 text-center flex flex-col items-center justify-center relative">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight mb-2">
        Volodymyr Romanyuk
      </h1>
      <p className="text-lg font-semibold text-sky-400 tracking-wider uppercase mb-4">
        Junior SOC Analyst
      </p>
      <div className="text-slate-400 text-sm md:text-base space-y-1">
        <p className="font-medium text-slate-300">Львів, Україна</p>
        <p className="flex flex-wrap justify-center gap-3 pt-2">
          <a href="https://github.com/inflMETEOR" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 hover:underline transition-colors">
            GitHub
          </a>
          <span>|</span>
          <a href="mailto:vromanyukjr@gmail.com" className="text-sky-400 hover:text-sky-300 hover:underline transition-colors">
            Email
          </a>
          <span>|</span>
          <a href="https://t.me/@DRAGON50080" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 hover:underline transition-colors">
            Telegram
          </a>
        </p>
      </div>

      {/* Кнопка перемикання теми */}
      <button
        onClick={toggleTheme}
        type="button"
        className="mt-6 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-colors cursor-pointer border border-slate-600 flex items-center gap-2 shadow-sm"
      >
        {isLight ? ' Нічна тема' : ' Денна тема'}
      </button>
    </header>
  );
}

export default Header;