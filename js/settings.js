function initSettingsPanel(clickSfx) {
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsToggleInline = document.getElementById('settings-toggle-inline');
    const settingsToggleHeader = document.getElementById('settings-toggle-header');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsClose = document.getElementById('settings-close');
    const settingsBackdrop = document.querySelector('.settings-backdrop');

    if (!settingsPanel) return;

    const openSettings = () => {
        settingsPanel.classList.add('active');
    };

    const closeSettings = () => {
        settingsPanel.classList.remove('active');
    };

    if (settingsToggle) {
        settingsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            openSettings();
        });
    }

    if (settingsToggleInline) {
        settingsToggleInline.addEventListener('click', (e) => {
            e.stopPropagation();
            openSettings();
        });
    }

    if (settingsToggleHeader) {
        settingsToggleHeader.addEventListener('click', (e) => {
            e.stopPropagation();
            openSettings();
        });
    }

    if (settingsClose) {
        settingsClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeSettings();
        });
    }

    if (settingsBackdrop) {
        settingsBackdrop.addEventListener('click', () => {
            closeSettings();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && settingsPanel.classList.contains('active')) {
            closeSettings();
        }
    });
}
