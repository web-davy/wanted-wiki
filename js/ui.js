function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('top-tabs');

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    
    nav.addEventListener('click', (e) => {
        const item = e.target.closest('.tab-dropdown-item, .tab-direct');
        if (item) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            
            document.querySelectorAll('.tab-dropdown.open').forEach(d => d.classList.remove('open'));
            document.querySelectorAll('.tab-dropdown-trigger.open').forEach(t => t.classList.remove('open'));
        }
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

function initDropdownNav() {
    
    document.querySelectorAll('.tab-group').forEach(group => {
        const trigger = group.querySelector('.tab-dropdown-trigger');
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('top-tabs');

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    
    nav.addEventListener('click', (e) => {
        const item = e.target.closest('.tab-dropdown-item, .tab-direct');
        if (item) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            
            document.querySelectorAll('.tab-dropdown.open').forEach(d => d.classList.remove('open'));
            document.querySelectorAll('.tab-dropdown-trigger.open').forEach(t => t.classList.remove('open'));
        }
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

function initDropdownNav() {
    
    document.querySelectorAll('.tab-group').forEach(group => {
        const trigger = group.querySelector('.tab-dropdown-trigger');
        const dropdown = group.querySelector('.tab-dropdown');
        if (!trigger || !dropdown) return;

        
        let closeTimeout;

        group.addEventListener('mouseenter', () => {
            if (window.matchMedia('(hover: none)').matches) return;
            clearTimeout(closeTimeout);
            
            document.querySelectorAll('.tab-dropdown').forEach(d => { if (d !== dropdown) d.classList.remove('open'); });
            document.querySelectorAll('.tab-dropdown-trigger').forEach(t => { if (t !== trigger) t.classList.remove('open'); });
            dropdown.classList.add('open');
            trigger.classList.add('open');
        });

        group.addEventListener('mouseleave', () => {
            if (window.matchMedia('(hover: none)').matches) return;
            closeTimeout = setTimeout(() => {
                dropdown.classList.remove('open');
                trigger.classList.remove('open');
            }, 120);
        });

        
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                e.stopPropagation();
                const isOpen = dropdown.classList.contains('open');
                
            document.querySelectorAll('.tab-dropdown').forEach(d => d.classList.remove('open'));
            document.querySelectorAll('.tab-dropdown-trigger').forEach(t => t.classList.remove('open'));
        }
    });

    
    const mainSearch = document.getElementById('search-input');
    const mobileSearch = document.getElementById('search-input-mobile');
    if (mainSearch && mobileSearch) {
        mobileSearch.addEventListener('input', () => {
            mainSearch.value = mobileSearch.value;
            mainSearch.dispatchEvent(new Event('input', { bubbles: true }));
        });
        mainSearch.addEventListener('input', () => {
            mobileSearch.value = mainSearch.value;
        });
    }
}

function initHeaderResize() {
    const header = document.querySelector('.fixed-header');
    const resizeHandle = document.querySelector('.header-resize-handle');
    const pageWrapper = document.querySelector('.page-wrapper');

    if (!header || !resizeHandle || !pageWrapper) return;

    const BASE_WIDTH = 240;
    const MIN_WIDTH = 160;
    const MAX_WIDTH = 500;
    const MIN_HEIGHT = 70;
    const MAX_HEIGHT = 300;

    const isSidebarMode = () => document.body.classList.contains('left-sidebar-mode');

    const updateScale = (height) => {
        const scale = Math.max(0.5, Math.min(1.5, height / 110)); 
        document.documentElement.style.setProperty('--header-scale', scale);
    };


    const updateSidebarScale = (width) => {
        const scale = Math.max(0.4, Math.min(1.2, width / BASE_WIDTH));
        document.documentElement.style.setProperty('--sidebar-scale', scale);
    };

    
    const syncSidebarHandle = (width) => {
        if (isSidebarMode()) resizeHandle.style.left = width + 'px';
    };

    const updatePagePadding = (size, isSidebar) => {
        if (isSidebar) {
            pageWrapper.style.paddingLeft = (size + 30) + 'px';
            pageWrapper.style.paddingTop = '';
        } else {
            pageWrapper.style.paddingTop = (size + 20) + 'px';
            pageWrapper.style.paddingLeft = '';
        }
    };

    const savedHeight = localStorage.getItem('headerHeight');
    const savedWidth = localStorage.getItem('headerWidth');

    if (isSidebarMode()) {
        const width = parseInt(savedWidth) || BASE_WIDTH;
        header.style.width = width + 'px';
        header.style.height = '';
        updatePagePadding(width, true);
        updateSidebarScale(width);
        syncSidebarHandle(width);
    } else {
        if (savedHeight) {
            const height = parseInt(savedHeight);
            header.style.height = height + 'px';
            updatePagePadding(height, false);
            updateScale(height);
        } else {
            requestAnimationFrame(() => {
                const naturalH = header.offsetHeight;
                updatePagePadding(naturalH, false);
                updateScale(naturalH);
            });
        }
        header.style.width = '';
    }

    let isResizing = false;
    let startX = 0, startY = 0;
    let startWidth = 0, startHeight = 0;

    resizeHandle.addEventListener('mousedown', (e) => {
        if (window.innerWidth <= 1024) return;
        isResizing = true;
        if (isSidebarMode()) {
            startX = e.clientX;
            startWidth = header.offsetWidth;
            document.body.style.cursor = 'ew-resize';
        } else {
            startY = e.clientY;
            startHeight = header.offsetHeight;
            document.body.style.cursor = 'ns-resize';
        }
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });

    let animationFrameId = null;
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        if (animationFrameId) return;

        animationFrameId = requestAnimationFrame(() => {
            if (isSidebarMode()) {
                const deltaX = e.clientX - startX;
                const newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, startWidth + deltaX));
                header.style.width = newWidth + 'px';
                document.documentElement.style.setProperty('--sidebar-width', newWidth + 'px');
                updatePagePadding(newWidth, true);
                updateSidebarScale(newWidth);
                syncSidebarHandle(newWidth);
            } else {
                const deltaY = e.clientY - startY;
                const newHeight = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, startHeight + deltaY));
                header.style.height = newHeight + 'px';
                updatePagePadding(newHeight, false);
                updateScale(newHeight);
            }
            animationFrameId = null;
        });
    });

    document.addEventListener('mouseup', () => {
        if (!isResizing) return;
        isResizing = false;
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        if (isSidebarMode()) {
            localStorage.setItem('headerWidth', header.offsetWidth);
        } else {
            localStorage.setItem('headerHeight', header.offsetHeight);
        }
    });
}

function initSidebarToggle(clickSfx) {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebarStatus = document.getElementById("sidebar-status");

    if (sidebarToggle && sidebarStatus && document.body.classList.contains("left-sidebar-mode")) {
        sidebarToggle.classList.add("active");
        sidebarStatus.textContent = "ON";
    }

    if (sidebarToggle && sidebarStatus) {
        sidebarToggle.addEventListener("click", () => {
            const isSidebar = document.body.classList.toggle("left-sidebar-mode");
            localStorage.setItem("sidebarMode", isSidebar);
            
            location.reload();
        });
    }
}

function initCountdownTimer() {
    const countdownDisplay = document.getElementById('countdown-display');
    if (!countdownDisplay) return;

    const targetDate = window.COUNTDOWN_TARGET || new Date('2026-03-06T17:00:00Z');

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            countdownDisplay.innerHTML = '<div class="countdown-time countdown-finished">UPDATE NOW!</div>';
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `
            <div class="countdown-units">
                <div class="countdown-unit">
                    <div class="countdown-number">${days.toString().padStart(2, '0')}</div>
                    <div class="countdown-label">Days</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-number">${hours.toString().padStart(2, '0')}</div>
                    <div class="countdown-label">Hours</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-number">${minutes.toString().padStart(2, '0')}</div>
                    <div class="countdown-label">Mins</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-number">${seconds.toString().padStart(2, '0')}</div>
                    <div class="countdown-label">Secs</div>
                </div>
            </div>
        `;

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
}
