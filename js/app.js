
const container = document.getElementById("page-container");
const bgm = document.getElementById("bgm");
const loadSfx = document.getElementById("sfx-load");
const clickSfx = document.getElementById("sfx-click");
const hoverSfx = document.getElementById("sfx-hover");
const volumeSlider = document.getElementById("bgm-volume");
const sizeSlider = document.getElementById("card-size-slider");

window.audioUnlocked = false;


window.loadPage = loadPage;
window.toggleCardDetails = toggleCardDetails;

function loadPage(page) {
    if (!container) return;

    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';

    setTimeout(() => {
        container.innerHTML = '<div class="loading glitch" data-text="LOADING...">LOADING ARCHIVE...</div>';

        if (window.audioUnlocked && loadSfx) {
            loadSfx.currentTime = 0;
            loadSfx.volume = 0.3;
            loadSfx.play().catch(() => { });
        }

        let content = "";
        try {
            switch (page) {
                case "home": content = typeof renderHome === "function" ? renderHome() : ""; break;
                case "valuables": content = typeof renderValuables === "function" ? renderValuables() : ""; break;
                case "atms": content = typeof renderATMs === "function" ? renderATMs() : ""; break;
                case "weapons": content = typeof renderWeapons === "function" ? renderWeapons() : ""; break;
                case "vehicles": content = typeof renderVehicles === "function" ? renderVehicles() : ""; break;
                case "gun-crates": content = typeof renderGunCrates === "function" ? renderGunCrates() : ""; break;
                case "missions": content = typeof renderMissions === "function" ? renderMissions() : ""; break;
                case "npcs": content = typeof renderNPCs === "function" ? renderNPCs() : ""; break;
                case "locations": content = typeof renderLocations === "function" ? renderLocations() : ""; break;
                case "store": content = typeof renderStore === "function" ? renderStore() : ""; break;
                default: content = `<h2>Work In Progress</h2><p>Under construction...</p>`;
            }
        } catch (e) {
            console.error("Error rendering page:", page, e);
            content = `<h2>ERROR</h2><p>Failed to load ${page}. Check console for details.</p>`;
        }

        container.innerHTML = content;

        if (page === "home") {
            if (typeof initCountdownTimer === "function") initCountdownTimer();
            if (typeof updateVisitorDisplay === "function") updateVisitorDisplay(window.visitorCountCached || "---");
        }

        const isLowEnd = document.body.classList.contains('low-end-mode');
        const cards = container.querySelectorAll('.card');

        if (isLowEnd) {
            container.style.opacity = '1';
            container.style.transform = 'none';
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'none';
                card.style.transition = 'none';
            });
            return;
        }

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) skew(-1deg)';
        });

        requestAnimationFrame(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
                    card.style.opacity = '1';
                    card.style.transform = '';
                }, index * 20);
            });
        });
    }, 150);
}

function updateVisitorDisplay(count) {
    window.visitorCountCached = count;
    const counterValue = document.getElementById('visitor-count');
    if (counterValue) {
        counterValue.textContent = count;
    }
}

function toggleCardDetails(cardId, btn) {
    const detailsElement = document.getElementById(`${cardId}-details`);
    const button = btn || (window.event ? window.event.target : null);
    if (!detailsElement || !button) return;

    const isCollapsed = detailsElement.classList.toggle('collapsed');
    button.textContent = isCollapsed ? 'Show more...' : 'Show less...';
}


document.addEventListener('DOMContentLoaded', () => {
    if (typeof initMobileMenu === 'function') initMobileMenu();
    if (typeof initSettingsPanel === 'function') initSettingsPanel(clickSfx);
    if (typeof initHeaderResize === 'function') initHeaderResize();
    if (typeof initSidebarToggle === 'function') initSidebarToggle(clickSfx);
    if (typeof initSearch === 'function') initSearch(container, window.renderSearchItem);


    const initGlobalSounds = () => {
        const interactiveSelectors = [
            'button',
            '.tab',
            '.sort-btn',
            '.card-details-toggle',
            '.weapon-mods-button',
            '.attachment-category-header',
            '.settings-toggle',
            '.settings-close',
            '.low-end-toggle',
            '.sidebar-toggle',
            '.always-show-more-toggle',
            '.hamburger',
            '.settings-backdrop',
            'a'
        ].join(', ');

        const resumeAudio = () => {
            if (bgm && bgm.paused && window.audioUnlocked) {
                bgm.play().catch(() => { });
            }
        };

        document.addEventListener('click', (e) => {
            resumeAudio();
            const el = e.target.closest(interactiveSelectors);
            if (el && window.audioUnlocked && clickSfx) {
                clickSfx.currentTime = 0;
                clickSfx.volume = 0.4;
                clickSfx.play().catch(() => { });
            }
        }, true);

        document.addEventListener('mouseover', (e) => {
            const el = e.target.closest(interactiveSelectors);
            if (el && window.audioUnlocked && hoverSfx) {
                if (el.dataset.hovered === "true") return;
                el.dataset.hovered = "true";

                hoverSfx.currentTime = 0;
                hoverSfx.volume = 0.2;
                hoverSfx.play().catch(() => { });
            }
        }, true);

        document.addEventListener('mouseout', (e) => {
            const el = e.target.closest(interactiveSelectors);
            if (el && !el.contains(e.relatedTarget)) {
                el.dataset.hovered = "false";
            }
        }, true);
    };

    initGlobalSounds();


    if (typeof trackVisit === 'function') trackVisit(updateVisitorDisplay);


    if (bgm && volumeSlider) {
        const savedVol = localStorage.getItem("bgmVolume") || 0.4;
        volumeSlider.value = savedVol;
        bgm.volume = savedVol;

        volumeSlider.addEventListener("input", () => {
            bgm.volume = volumeSlider.value;
            localStorage.setItem("bgmVolume", volumeSlider.value);
        });
    }


    if (sizeSlider) {
        const savedSize = localStorage.getItem("cardSize") || 200;
        sizeSlider.value = savedSize;
        document.documentElement.style.setProperty('--card-min-size', `${savedSize}px`);

        sizeSlider.addEventListener("input", () => {
            document.documentElement.style.setProperty('--card-min-size', `${sizeSlider.value}px`);
            localStorage.setItem("cardSize", sizeSlider.value);
        });
    }


    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            if (!window.audioUnlocked) return;

            // UI Active State
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            loadPage(tab.dataset.page);
        });
    });


    if (typeof initGarage === 'function') {
        initGarage((skipped) => {
            window.audioUnlocked = true;

            const homeTab = document.querySelector('.tab[data-page="home"]');
            if (homeTab) homeTab.classList.add("active");

            if (skipped) {
                loadPage("home");
            } else {
                if (bgm) {
                    bgm.play().catch(() => { });
                }

                setTimeout(() => {
                    loadPage("home");
                }, 400);
            }
        });
    }

    const startAudioOnInteraction = () => {
        if (window.audioUnlocked && bgm && bgm.paused) {
            bgm.play().catch(() => { });
        }
    };
    window.addEventListener('mousedown', startAudioOnInteraction, true);
    window.addEventListener('keydown', startAudioOnInteraction, true);


    const lowEndToggle = document.getElementById("low-end-toggle");
    const lowEndStatus = document.getElementById("low-end-status");
    if (lowEndToggle && lowEndStatus) {
        const isLowEnd = localStorage.getItem("lowEndMode") === "true";
        if (isLowEnd) {
            document.body.classList.add("low-end-mode");
            lowEndToggle.classList.add("active");
            lowEndStatus.textContent = "ON";
        }
        lowEndToggle.addEventListener("click", () => {
            const active = document.body.classList.toggle("low-end-mode");
            lowEndToggle.classList.toggle("active", active);
            lowEndStatus.textContent = active ? "ON" : "OFF";
            localStorage.setItem("lowEndMode", active);
        });
    }


    const showMoreToggle = document.getElementById("always-show-more-toggle");
    const showMoreStatus = document.getElementById("always-show-more-status");
    if (showMoreToggle && showMoreStatus) {
        const isAlwaysShow = localStorage.getItem("alwaysShowMore") === "true";
        if (isAlwaysShow) {
            document.body.classList.add("always-show-more");
            showMoreToggle.classList.add("active");
            showMoreStatus.textContent = "ON";
        }
        showMoreToggle.addEventListener("click", () => {
            const active = document.body.classList.toggle("always-show-more");
            showMoreToggle.classList.toggle("active", active);
            showMoreStatus.textContent = active ? "ON" : "OFF";
            localStorage.setItem("alwaysShowMore", active);

            const activeTab = document.querySelector(".tab.active");
            if (activeTab) loadPage(activeTab.dataset.page);
        });
    }

    const introToggle = document.getElementById("intro-toggle");
    const introStatus = document.getElementById("intro-status");
    if (introToggle && introStatus) {
        const isSkipped = localStorage.getItem("skipGarageIntro") === "true";
        const isOn = !isSkipped;

        if (isOn) introToggle.classList.add("active");
        introStatus.textContent = isOn ? "ON" : "OFF";

        introToggle.addEventListener("click", () => {
            const nowOn = introToggle.classList.toggle("active");
            introStatus.textContent = nowOn ? "ON" : "OFF";
            localStorage.setItem("skipGarageIntro", nowOn ? "false" : "true");
        });
    }
});
