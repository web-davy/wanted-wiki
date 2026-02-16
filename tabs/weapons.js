function renderWeapons(sort = "high") {
  const sorted = [...WEAPONS_DATA].sort((a, b) =>
    sort === "high" ? b.contractPrice - a.contractPrice : a.contractPrice - b.contractPrice
  );

  const cards = sorted.map(item => {
    const slug = generateSlug(item.name);

    const visibleContent = `
      ${renderPriceTag(item.contractPrice)}
      <h3>${item.name}</h3>
    `;
    const hiddenContent = `
      ${renderStat('Re-buy', formatPrice(item.repairPrice))}
      ${renderStat('Ammo', item.stats.ammo)}
      ${renderStat('Ammo Cost', item.stats.ammoPrice)}
      ${renderStat('Damage', item.stats.damage)}
      ${renderStat('RPM', item.stats.firerate)}
      ${renderStat('Reload', `${item.stats.reload}s`)}
      ${renderStat('Accuracy', item.stats.accuracy)}
    `;

    const cardId = `card-${slug}-${Math.random().toString(36).substr(2, 9)}`;

    return `
      <div class="card">
        <img src="images/${slug}.jpg" alt="${item.name}" 
             style="width:100%; height:auto; margin-bottom:15px; border-radius:4px; 
                    box-shadow:0 0 10px rgba(255,255,255,0.2);">
        ${visibleContent}
        <div class="card-details collapsed" id="${cardId}-details">
          ${hiddenContent}
        </div>
        <button class="card-details-toggle" onclick="toggleCardDetails('${cardId}')">
          Show more...
        </button>
      </div>`;
  });

  const sortButtons = renderSortButtons([
    { label: 'Expensive to Cheap', value: 'high', onClick: "sortWeapons('high')" },
    { label: 'Cheap to Expensive', value: 'low', onClick: "sortWeapons('low')" }
  ], sort);

  return renderPage('WEAPONs', sortButtons, cards);
}

function sortWeapons(order) {
  document.getElementById("page-container").innerHTML = renderWeapons(order);
}