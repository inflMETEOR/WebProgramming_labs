import React, { useState, useEffect } from 'react';

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            setIsOpen(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            id="modal-overlay"
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
                {/* Кнопка закриття (хрестик) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-sky-400 text-2xl font-bold transition-colors"
                    type="button"
                >
                    &times;
                </button>

                <h3 className="text-xl font-bold text-slate-100 mb-1">Зворотний зв'язок</h3>
                <p className="text-slate-400 text-sm mb-6">Залиште свої дані, і я зв'яжуся з вами!</p>

                {/* Заміни mljbrend на свій ID з Formspree */}
                <form action="https://formspree.io/f/mljbrend" method="POST" className="space-y-4">
                    <div>
                        <label htmlFor="form-name" className="block text-xs font-semibold text-slate-300 mb-1">Ім'я:</label>
                        <input
                            type="text"
                            id="form-name"
                            name="name"
                            required
                            placeholder="Ваше ім'я"
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="form-email" className="block text-xs font-semibold text-slate-300 mb-1">Email:</label>
                        <input
                            type="email"
                            id="form-email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-300 mb-1">Телефон:</label>
                        <input
                            type="tel"
                            id="form-phone"
                            name="phone"
                            required
                            placeholder="+380XXXXXXXXX"
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="form-message" className="block text-xs font-semibold text-slate-300 mb-1">Повідомлення:</label>
                        <textarea
                            id="form-message"
                            name="message"
                            rows="4"
                            required
                            placeholder="Текст вашого повідомлення..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2.5 rounded-lg text-sm transition-colors cursor-pointer mt-2"
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;