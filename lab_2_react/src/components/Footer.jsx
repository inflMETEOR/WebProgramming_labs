import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const sysData = {
            platform: navigator.platform,
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenResolution: `${window.screen.width}x${window.screen.height}`
        };

        localStorage.setItem('systemInfoStorage', JSON.stringify(sysData));

        const savedData = localStorage.getItem('systemInfoStorage');
        if (savedData) {
            setInfo(JSON.parse(savedData));
        }
    }, []);

    if (!info) return null;

    return (
        <section className="card-section" id="system-footer">
            <h2 className="section-title">Системна інформація</h2>
            <div id="footer-content" className="about-text">
                <p><strong>Платформа / ОС:</strong> {info.platform}</p>
                <p><strong>Браузер (User Agent):</strong> {info.userAgent}</p>
                <p>
                    <strong>Мова системи:</strong> {info.language} | {' '}
                    <strong>Роздільна здатність:</strong> {info.screenResolution}
                </p>
            </div>
        </section>
    );
};

export default Footer;