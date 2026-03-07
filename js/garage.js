function initGarage(onOpen) {
    const garageIntro = document.getElementById("garage-intro");
    const neverShowCheckbox = document.getElementById("never-show-garage");
    const bgm = document.getElementById("bgm");
    const clickSfx = document.getElementById("sfx-click");

    if (localStorage.getItem("skipGarageIntro") === "true") {
        if (garageIntro) garageIntro.remove();
        if (onOpen) onOpen(true);
        return;
    }

    window.openGarage = () => {
        if (neverShowCheckbox && neverShowCheckbox.checked) {
            localStorage.setItem("skipGarageIntro", "true");
        }

        const statusDots = document.querySelectorAll('.status-dot');
        statusDots.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.background = '#0f0';
                dot.style.boxShadow = '0 0 10px #0f0';
            }, index * 50);
        });

        const clickPrompt = document.getElementById("click-prompt");
        if (clickPrompt) {
            clickPrompt.style.opacity = '0';
            clickPrompt.style.transform = 'translateY(20px)';
        }

        setTimeout(() => {
            if (garageIntro) garageIntro.classList.add("open");
            if (onOpen) onOpen(false);
        }, 300);

        setTimeout(() => {
            if (garageIntro) garageIntro.remove();
        }, 1500);
    };
}
