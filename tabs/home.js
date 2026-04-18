const UPDATES = [
    { version: "D.18/M.04/Y.2026", description: "Unknown Update", color: "#000000ff", color2: "#ffffffff" },
    { version: "D.03/M.04/Y.2026", description: "Easter Event", color: "#ff80f7ff", color2: "#ffffffff" },
    { version: "D.20/M.03/Y.2026", description: "Airdrop Update", color: "#ff0000ff", color2: "#ffffffff" },
    { version: "D.06/M.03/Y.2026", description: "Zoro and Zorvello Cars Update", color: "#f97316ff", color2: "#ffffffff" },
    { version: "D.20/M.02/Y.2026", description: "Docks & Jewerly Update", color: "#00e1ffff", color2: "#ffffffff" },
    { version: "D.12/M.12/Y.2025", description: "Christmas Event", color: "#00ffaaff", color2: "#ffffffff" }
];

const COUNTDOWN_TARGET = new Date('2026-04-18T22:00:00+03:00');
window.COUNTDOWN_TARGET = COUNTDOWN_TARGET;

function renderHome() {

    const updatesHTML = UPDATES.map(update => {
        const isRainbow = !!update.color2;
        const colorVars = isRainbow ? `--color-1: ${update.color}; --color-2: ${update.color2};` : '';
        const textClass = isRainbow ? 'rainbow-text' : '';
        const textColorStyle = isRainbow ? '' : `color: ${update.color};`;

        return `
        <div class="update-row">
            <div class="update-dot" style="background: ${update.color}; box-shadow: 0 0 6px ${update.color};"></div>
            <div>
                <div class="update-version ${textClass}" style="${colorVars}${textColorStyle}">
                    ${update.version}
                </div>
                <div class="update-desc">${update.description}</div>
            </div>
        </div>
    `;
    }).join('');

    const managersHTML = (window.CONTRIBUTORS_DATA?.managers || CONTRIBUTORS_DATA?.managers || []).map(m => `
        <div class="staff-card">
            <h3 class="staff-card-title">${m.title.toUpperCase()}</h3>
            <div class="staff-name">${m.name}</div>
        </div>
    `).join('');

    const staffHTML = (window.CONTRIBUTORS_DATA?.staff || CONTRIBUTORS_DATA?.staff || []).map(s => `
        <li><strong>${s.name}</strong> - ${s.title}</li>
    `).join('');

    const contributorsHTML = (window.CONTRIBUTORS_DATA?.contributors || CONTRIBUTORS_DATA?.contributors || []).map(c => `
        <li><strong>${c.name}</strong> - ${c.contributions}</li>
    `).join('');

    return `
        <div class="home-container">
            <div class="hero-section">
                <div class="hero-bg"></div>
                <div class="hero-logo-container">
                    <img src="images/logo.png" alt="WANTED Logo" class="hero-logo">
                </div>
                <h1 class="hero-title">${t('home_hero_title')}</h1>
                <p class="hero-text">
                    ${t('home_hero_text')}<br><br>
                    ${t('home_hero_disclaimer')}
                </p>
                <div class="play-btn-container">
                    <a href="https://www.roblox.com/games/14438406081/Wanted" target="_blank" class="play-btn">${t('home_play_btn')}</a>
                </div>
            </div>

            <div class="updates-section">
                <div class="updates-wrapper">
                    <div class="updates-box">
                        <div class="updates-header">
                            <span class="updates-icon">ⴵ</span>
                            <h3 class="updates-title">${t('home_recent_updates')}</h3>
                        </div>
                        <div class="updates-list">
                            ${updatesHTML}
                        </div>
                    </div>
                    <div class="countdown-box">
                        <div class="countdown-header">
                            <span class="countdown-icon">⏱</span>
                            <h3 class="countdown-title">${t('home_next_update')}</h3>
                        </div>
                        <div id="countdown-display" class="countdown-display">
                            <div class="countdown-time">${t('home_calculating')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="admin-section">
                <div class="admin-bg"></div>
                <div class="admin-content">
                    <div class="admin-icon-container">
                         <img src="images/wikiadmin.png" alt="Wiki Icon" class="admin-icon">
                    </div>
                    <h2 class="admin-title">${t('home_admin_title')}</h2>
                    <p class="admin-text">${t('home_admin_text')}</p>
                    
                    <div class="staff-grid">
                        ${managersHTML}
                        <div class="staff-card">
                            <h3 class="staff-card-title">${t('home_wiki_staff')}</h3>
                            <ul class="staff-list">
                                ${staffHTML || `<li>${t('home_no_staff')}</li>`}
                            </ul>
                        </div>
                    </div>

                    <div class="contributors-grid">
                        <div class="contributor-card">
                            <h3 class="staff-card-title">${t('home_wiki_contributors')}</h3>
                            <ul class="contributor-list">
                                ${contributorsHTML || `<li>${t('home_no_contributors')}</li>`}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="views-section">
                <div class="views-wrapper">
                    <div class="views-box">
                        <div class="views-header">
                            <h3 class="views-title">${t('home_viewers_title')}</h3>
                        </div>
                        <div class="views-display">
                            <div id="visitor-count" class="views-count">---</div>
                            <div class="views-subtext">${t('home_viewers_subtext')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}