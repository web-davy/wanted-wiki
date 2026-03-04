function initSettingsPanel(clickSfx) {
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsClose = document.getElementById('settings-close');
    const settingsBackdrop = document.querySelector('.settings-backdrop');
    const resetGarageBtn = document.getElementById('reset-garage-intro');

    if (!settingsToggle || !settingsPanel) return;

    const playClick = () => {
        if (window.audioUnlocked && clickSfx) {
            clickSfx.currentTime = 0;
            clickSfx.volume = 0.3;
            clickSfx.play().catch(() => { });
        }
    };

    const openSettings = () => {
        settingsPanel.classList.add('active');
        playClick();
    };

    const closeSettings = () => {
        settingsPanel.classList.remove('active');
        playClick();
    };

    settingsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        openSettings();
    });

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

    if (resetGarageBtn) {
        resetGarageBtn.addEventListener('click', () => {
            localStorage.removeItem('skipGarageIntro');
            playClick();

            resetGarageBtn.style.background = '#fff';
            resetGarageBtn.style.color = '#000';
            resetGarageBtn.innerHTML = '<span class="reset-icon">✓</span><span>Reset!</span>';

            setTimeout(() => {
                resetGarageBtn.style.background = '';
                resetGarageBtn.style.color = '';
                resetGarageBtn.innerHTML = '<span class="reset-icon">↻</span><span>Reset Garage Intro</span>';
            }, 2000);
        });
    }
}
