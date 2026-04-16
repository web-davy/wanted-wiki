function initSearch(container, renderSearchItem) {
    const searchInput = document.getElementById("search-input");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            const activeTab = document.querySelector(".tab.active");
            if (activeTab) window.loadPage(activeTab.dataset.page);
            return;
        }

        container.innerHTML = '<div class="loading glitch" data-text="SEARCHING...">SEARCHING DATABASE...</div>';
        clearTimeout(window.searchTimeout);
        window.searchTimeout = setTimeout(() => {
            performSearch(query, container, renderSearchItem);
        }, 300);
    });
}

function renderSearchItem(item) {
    let slug = generateSlug(item.name || item.title);
    let content = '';
    let rarityKey = null;

    if (item.searchType === 'weapon') {
        content = `
                ${renderPriceTag(item.contractPrice)}
                <h3>${item.highlightedName || item.name}</h3>
                ${renderStat('Requirements', item.requirements)}
                ${renderStat('Re-buy', formatPrice(item.reBuyPrice))}
                ${renderStat('Ammo', item.stats.ammo)}
                ${renderStat('Ammo Cost', item.stats.ammoPrice)}
                ${renderStat('Damage', item.stats.damage)}
                ${renderStat('RPM', item.stats.firerate)}
                ${renderStat('Reload', `${item.stats.reload}s`)}
                ${renderStat('Accuracy', item.stats.accuracy)}
            `;
        rarityKey = null;
    } else if (item.searchType === 'vehicle') {
        let statsHtml = '';
        if (item.type === 'ground') {
            statsHtml = `
                    ${renderStat('Top Speed', `${item.stats.topSpeed} MPH`)}
                    ${renderStat('Acceleration', `${item.stats.acceleration}%`)}
                    ${renderStat('Braking', `${item.stats.braking}%`)}
                    ${renderStat('Health', item.stats.Health)}
                    ${renderStat('Armor', item.stats.armor)}
                `;
        } else if (item.type === 'flying') {
            statsHtml = `
                    ${renderStat('Top Speed', `${item.stats.topSpeed}%`)}
                    ${renderStat('Handling', `${item.stats.handling}%`)}
                    ${renderStat('Spool Time', `${item.stats.spoolTime}s`)}
                    ${renderStat('Health', item.stats.Health)}
                    ${renderStat('Armor', item.stats.armor)}
                `;
        }

        content = `
                ${renderPriceTag(item.contractPrice)}
                <h3>${item.highlightedName || item.name}</h3>
                ${renderStat('Requirements', item.requirements)}
                ${renderStat('Repair (fully destroyed)', formatPrice(item.repairPrice))}
                ${statsHtml}
            `;
        rarityKey = null;
    } else if (item.searchType === 'atm') {
        content = `
              <h3>${item.highlightedName || item.name}</h3>
              ${renderStat('Cash', formatPrice(item.price))}
            `;
        rarityKey = item.rarity;
    } else if (item.searchType === 'valuable') {
        content = `
              <h3>${item.highlightedName || item.name}</h3>
              ${renderStat('Price', formatPrice(item.price))}
              ${renderStat('Weight', `${item.weight} kg`)}
            `;
        rarityKey = item.rarity;
    } else if (item.searchType === 'guncrate') {
        content = `
                <h3>${item.highlightedName || item.name}</h3>
                ${renderStat('Contains', item.gun)}
                ${renderStat('Cooldown', item.cooldown)}
                ${renderStat('Location', item.location)}
            `;
        rarityKey = null;
    } else if (item.searchType === 'mission') {
        slug = item.id;
        content = `
                <h3>${item.highlightedName || item.title}</h3>
                ${renderStat('Category', item.missionType)}
                ${renderStat('Location', item.location)}
                ${renderStat('Description', item.description)}
                ${renderStat('How', item.howToComplete)}
                ${renderStat('Reward', (item.rewards || []).join(', '))}
            `;
        rarityKey = item.difficulty;
    } else if (item.searchType === 'npc') {
        content = `
                <h3>${item.highlightedName || item.name}</h3>
                ${renderStat('Location', item.location)}
                ${renderStat('Description', item.description)}
            `;
        rarityKey = item.team;
    } else if (item.searchType === 'location') {
        content = `
                <h3>${item.highlightedName || item.name}</h3>
                ${renderStat('Description', item.description)}
             `;
        rarityKey = null;
    } else if (item.searchType === 'event') {
        content = `
                <h3>${item.highlightedName || item.title}</h3>
                ${renderStat('Date', item.date)}
                ${renderStat('Description', item.description)}
             `;
        rarityKey = null;
    }

    const folderMap = {
        'weapon': 'weapons',
        'vehicle': 'vehicles',
        'atm': 'atms&vaults',
        'valuable': 'valuables',
        'guncrate': 'crates',
        'mission': 'missions',
        'npc': 'npcs',
        'location': 'locations',
        'event': 'events'
    };
    const folder = folderMap[item.searchType];

    if (item.searchType === 'npc') {
        return renderCard(item, rarityKey, content, folder);
    } else {
        return renderCardJPG(item, rarityKey, content, folder);
    }
}

function performSearch(query, container, renderSearchItem) {
    const results = [];
    const checkData = (data, searchType, categoryLabel) => {
        if (typeof data !== 'undefined' && Array.isArray(data)) {
            data.forEach(item => {
                const itemName = item.name || item.title || "";
                if (itemName.toLowerCase().includes(query)) {
                    results.push({ ...item, name: itemName, searchType, categoryLabel });
                }
            });
        }
    };

    checkData((typeof GUNS_DATA !== 'undefined' ? GUNS_DATA : []), 'weapon', 'WEAPON');
    checkData((typeof EXPLOSIVES_DATA !== 'undefined' ? EXPLOSIVES_DATA : []), 'weapon', 'WEAPON');
    checkData((typeof TOOLS_DATA !== 'undefined' ? TOOLS_DATA : []), 'weapon', 'WEAPON');
    checkData((typeof VEHICLES_DATA !== 'undefined' ? VEHICLES_DATA : window.VEHICLES), 'vehicle', 'VEHICLE');
    checkData((typeof ATMS_DATA !== 'undefined' ? ATMS_DATA : window.ATMS), 'atm', 'ATM');
    checkData((typeof GUN_CRATES_DATA !== 'undefined' ? GUN_CRATES_DATA : window.GUN_CRATES), 'guncrate', 'GUN CRATE');
    checkData((typeof VALUABLES_DATA !== 'undefined' ? VALUABLES_DATA : window.VALUABLES), 'valuable', 'VALUABLE');
    checkData((typeof MISSIONS_DATA !== 'undefined' ? MISSIONS_DATA : window.MISSIONS), 'mission', 'MISSION');
    checkData((typeof NPCS_DATA !== 'undefined' ? NPCS_DATA : window.NPCS), 'npc', 'NPC');
    checkData((typeof LOCATIONS_DATA !== 'undefined' ? LOCATIONS_DATA : window.LOCATIONS), 'location', 'LOCATION');
    checkData((typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : []), 'event', 'EVENT');

    if (results.length === 0) {
        container.innerHTML = `<h2>NO MATCHES FOUND</h2><p style="text-align:center; color:#888;">No entries match "${query}"</p>`;
        return;
    }

    const cardsHTML = results.map(item => {
        const regex = new RegExp(`(${query})`, 'gi');
        const highlightedName = item.name.replace(regex, '<span class="highlight">$1</span>');
        const itemWithHighlight = { ...item, highlightedName: highlightedName };
        return renderSearchItem(itemWithHighlight);
    }).join('');

    container.innerHTML = `<h2>SEARCH RESULTS: "${query}"</h2><div class="card-grid">${cardsHTML}</div>`;

    const cards = container.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) skew(-1deg)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            card.style.opacity = '1';
            card.style.transform = '';
        }, index * 20);
    });
}
window.renderSearchItem = renderSearchItem;
