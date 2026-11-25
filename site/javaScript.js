const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`
};

localStorage.setItem("systemInfoStorage", JSON.stringify(systemInfo))

const data_string = localStorage.getItem("systemInfoStorage")
const data_parce = JSON.parse(data_string)

const footer = document.getElementById("footer-content")

if (footer && data_parce) {
    footer.innerHTML = `
        <p><strong>Платформа / ОС:</strong> ${data_parce.platform}</p>
        <p><strong>Браузер (User Agent):</strong> ${data_parce.userAgent}</p>
        <p><strong>Мова системи:</strong> ${data_parce.language} | <strong>Роздільна здатність:</strong> ${data_parce.screenResolution}</p>
    `;
}

// завдання 2

const url = "https://jsonplaceholder.typicode.com/posts/17/comments";
const reviews = document.getElementById("comments-container")
async function rewie_from_placeholder() {
    try {
        const responce = await fetch(url)
        const data = await responce.json()
        if (responce && data) {
            reviews.innerHTML = data.map(comment => `
                <div class="review-item" style="background: #1e293b; padding: 15px; margin-top: 12px; border-radius: 6px; border: 1px solid #334155;">
                    <h4 style="color: #38bdf8; margin-bottom: 5px;">${comment.name} (${comment.email})</h4>
                    <p style="color: #cbd5e1; font-size: 0.95rem;">${comment.body}</p>
                </div>
            `).join('');
        }
    }
    catch (e) {
        console.error(e)
    }

}
rewie_from_placeholder();

// завдання 3

const info = document.getElementById("contact-modal")
const closeModalBtn = document.getElementById("close-modal-btn");



setTimeout(() => {
    if (info) {
        info.style.display = "flex"
    }
}, 60000)


if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        info.style.display = "none"
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})

// завдання 4

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const data = new Date().getHours()

function AutoChangeTheme() {
    if (data >= 7 && data <= 21) {
        document.body.classList.add("light-theme")
    }
    else {
        document.body.classList.remove("light-theme")
    }
}

AutoChangeTheme();

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme")
    })
}