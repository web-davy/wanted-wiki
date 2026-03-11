function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');

    window.googleTranslateReady = true;

    if (window.pendingTranslation) {
        const lang = window.pendingTranslation;
        window.pendingTranslation = null;
        setTimeout(() => applyGoogleTranslation(lang), 100);
    }
}

(function () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);
})();

function setTranslateCookie(lang) {
    const domain = window.location.hostname;
    const cookieValue = `googtrans=/en/${lang}`;
    document.cookie = `${cookieValue}; path=/; domain=${domain}`;
    document.cookie = `${cookieValue}; path=/`;
}

function applyGoogleTranslation(lang) {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change", { bubbles: true }));

        const event = new Event("change", { bubbles: true, cancelable: true });
        select.dispatchEvent(event);

        setTimeout(() => {
            const frame = document.querySelector(".goog-te-menu-frame");
            if (frame) {
                frame.style.display = "none";
            }
        }, 500);
    }
}

function changeLanguage(lang) {
    setTranslateCookie(lang);
    localStorage.setItem("preferredLanguage", lang);

    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl-mode');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl-mode');
    }

    if (window.googleTranslateReady) {
        applyGoogleTranslation(lang);
    } else {
        window.pendingTranslation = lang;

        setTimeout(() => {
            if (window.googleTranslateReady && window.pendingTranslation) {
                applyGoogleTranslation(lang);
            }
        }, 2000);
    }
}

window.applyTranslation = function () {
    const savedLang = localStorage.getItem("preferredLanguage") || "en";
    if (savedLang !== "en") {
        if (window.googleTranslateReady) {
            applyGoogleTranslation(savedLang);
        } else {
            window.pendingTranslation = savedLang;

            setTimeout(() => {
                if (window.googleTranslateReady) {
                    applyGoogleTranslation(savedLang);
                }
            }, 3000);
        }
    }
};

const i18nStyles = `
    body { top: 0 !important; position: static !important; }
    .goog-te-banner-frame,
    .goog-te-gadget,
    .goog-te-menu-value,
    .goog-tooltip,
    .goog-tooltip:hover { display: none !important; }
    #google_translate_element { position: absolute; visibility: hidden; pointer-events: none; height: 1px; width: 1px; top: -100px; left: -100px; }
    .rtl-mode { text-align: right; }
    .rtl-mode .setting-label,
    .rtl-mode .setting-toggle-btn { flex-direction: row-reverse; }
    font { background-color: transparent !important; box-shadow: none !important; }
    .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = i18nStyles;
document.head.appendChild(styleSheet);

document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("language-select");
    const savedLang = localStorage.getItem("preferredLanguage") || "en";

    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener("change", (e) => {
            changeLanguage(e.target.value);
        });

        let attempts = 0;
        const check = setInterval(() => {
            const select = document.querySelector(".goog-te-combo");
            if (select || attempts > 30) {
                if (savedLang !== "en") changeLanguage(savedLang);
                clearInterval(check);
            }
            attempts++;
        }, 1000);
    }
});
