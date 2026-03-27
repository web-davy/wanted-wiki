let dropdownJustClicked = false;

function initActiveTab() {
    const currentHash = window.location.hash || '';

    document.querySelectorAll('.tab-direct, .tab-dropdown-item').forEach(t => {
        t.classList.remove('active');
        delete t.dataset.selected;
    });

    document.querySelectorAll('.tab-direct, .tab-dropdown-item').forEach(item => {
        const href = item.getAttribute('href');
        if (!href) return;

        if (href === currentHash) {
            item.classList.add('active');
            item.dataset.selected = 'true';
        }
    });
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('top-tabs');

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', (e) => {
        if (e.target.closest('.tab-dropdown-trigger')) return;

        if (dropdownJustClicked) {
            dropdownJustClicked = false;
            return;
        }

        e.stopPropagation();
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');

        document.querySelectorAll('.tab-dropdown').forEach(d => d.classList.remove('open'));
    });

    nav.addEventListener('click', (e) => {
        const item = e.target.closest('.tab-dropdown-item, .tab-direct');
        if (item) {
            document.querySelectorAll('.tab-direct, .tab-dropdown-item').forEach(t => {
                t.classList.remove('active');
                delete t.dataset.selected;
            });

            item.classList.add('active');
            item.dataset.selected = 'true';

            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.querySelectorAll('.tab-dropdown').forEach(d => d.classList.remove('open'));
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
            if (window.innerWidth <= 1024) return;
            clearTimeout(closeTimeout);

            document.querySelectorAll('.tab-dropdown').forEach(d => {
                if (d !== dropdown) d.classList.remove('open');
            });

            dropdown.classList.add('open');
        });

        group.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 1024) return;
            closeTimeout = setTimeout(() => {
                dropdown.classList.remove('open');
            }, 120);
        });

        const handleDropdownToggle = (e) => {
            if (window.innerWidth > 1024) return;
            e.preventDefault();
            e.stopPropagation();

            dropdownJustClicked = true;
            setTimeout(() => { dropdownJustClicked = false; }, 300);

            const isAlreadyOpen = dropdown.classList.contains('open');

            document.querySelectorAll('.tab-dropdown').forEach(d => d.classList.remove('open'));

            if (!isAlreadyOpen) {
                dropdown.classList.add('open');
            }
        };

        trigger.addEventListener('click', handleDropdownToggle);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.tab-group')) {
            document.querySelectorAll('.tab-dropdown').forEach(d => d.classList.remove('open'));
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

    window.addEventListener('hashchange', initActiveTab);

    initActiveTab();
}