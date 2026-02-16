function renderVehicles(sort = "high") {
  const groundVehicles = VEHICLES_DATA.filter(v => v.type === 'ground');
  const flyingVehicles = VEHICLES_DATA.filter(v => v.type === 'flying');

  const sortedGround = [...groundVehicles].sort((a, b) =>
    sort === "high" ? b.contractPrice - a.contractPrice : a.contractPrice - b.contractPrice
  );

  const sortedFlying = [...flyingVehicles].sort((a, b) =>
    sort === "high" ? b.contractPrice - a.contractPrice : a.contractPrice - b.contractPrice
  );

  const groundCards = sortedGround.map(item => {
    const slug = generateSlug(item.name);

    const visibleContent = `
      ${renderPriceTag(item.contractPrice)}
      <h3>${item.name}</h3>
    `;
    const hiddenContent = `
      ${renderStat('Repair', formatPrice(item.repairPrice))}
      ${renderStat('Top Speed', `${item.stats.topSpeed} MPH`)}
      ${renderStat('Acceleration', `${item.stats.acceleration}%`)}
      ${renderStat('Braking', `${item.stats.braking}%`)}
      ${renderStat('Max Health', item.stats.maxHealth)}
      ${renderStat('Armor', item.stats.armor)}
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

  const flyingCards = sortedFlying.map(item => {
    const slug = generateSlug(item.name);

    const visibleContent = `
      ${renderPriceTag(item.contractPrice)}
      <h3>${item.name}</h3>
    `;
    const hiddenContent = `
      ${renderStat('Repair', formatPrice(item.repairPrice))}
      ${renderStat('Top Speed', `${item.stats.topSpeed} Knots`)}
      ${renderStat('Handling', `${item.stats.handling}%`)}
      ${renderStat('Spool Time', `${item.stats.spoolTime}s`)}
      ${renderStat('Max Health', item.stats.maxHealth)}
      ${renderStat('Armor', item.stats.armor)}
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
    { label: 'Expensive to Cheap', value: 'high', onClick: "sortVehicles('high')" },
    { label: 'Cheap to Expensive', value: 'low', onClick: "sortVehicles('low')" }
  ], sort);

  const groundSection = `
    <div class="card-grid">
      ${groundCards.join('')}
    </div>
  `;

  const flyingSection = `
    <div style="margin: 40px 0; border-bottom: 2px solid #fff; opacity: 0.3;"></div>
    <div class="card-grid">
      ${flyingCards.join('')}
    </div>
  `;

  return `
    <h2>VEHICLEs</h2>
    ${sortButtons}
    ${groundSection}
    ${flyingSection}
  `;
}

function sortVehicles(order) {
  document.getElementById("page-container").innerHTML = renderVehicles(order);
}