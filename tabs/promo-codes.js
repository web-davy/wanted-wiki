function renderPromoCodes(filter = "all") {
    let filteredCodes = PROMO_CODES_DATA;

    if (filter === "active") {
        filteredCodes = PROMO_CODES_DATA.filter(item => item.active);
    } else if (filter === "expired") {
        filteredCodes = PROMO_CODES_DATA.filter(item => !item.active);
    }

    const cards = filteredCodes.map(item => {
        const statusHtml = item.active
            ? `<span style="color: #00ffaa; text-shadow: 0 0 5px #00ffaa;">ACTIVE</span>`
            : `<span style="color: #ff3333; text-shadow: 0 0 5px #ff3333;">EXPIRED</span>`;

        const visibleContent = `
            <h3>${item.code}</h3>
            ${renderStat('Status', statusHtml)}
            ${renderStat('Reward', item.reward)}
            ${renderStat('Description', item.description)}
        `;

        const slug = generateSlug(item.code);

        let imgTag = `<img src="images/promocodes/${slug}.jpg" alt="${item.code}" loading="lazy" 
          style="width:100%; height:auto; margin-bottom:15px; border-radius:4px; box-shadow:0 0 10px rgba(255,255,255,0.2);"
          onerror="this.onerror=null; this.src='images/favicon.png'; this.style.opacity='0.5'; this.style.objectFit='contain'; this.style.height='150px';"/>`;

        return `
          <div class="card" style="border-top: 3px solid ${item.active ? '#00ffaa' : '#ff3333'};">
            ${imgTag}
            ${visibleContent}
          </div>
        `;
    });

    const filterButtons = renderSortButtons([
        { label: 'All Codes', value: 'all', onClick: "filterPromoCodes('all')" },
        { label: 'Active', value: 'active', onClick: "filterPromoCodes('active')" },
        { label: 'Expired', value: 'expired', onClick: "filterPromoCodes('expired')" }
    ], filter);

    return renderPage("PROMO CODES", filterButtons, cards, "New codes are added periodically. Keep an eye out for updates!");
}

function filterPromoCodes(status) {
    const container = document.getElementById("page-container");
    if (container) {
        container.innerHTML = renderPromoCodes(status);
    }
}
