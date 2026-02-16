function renderNPCs(order = "az") {
  const sorted = [...NPCS_DATA].sort((a, b) =>
    order === "az"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  const cards = sorted.map(item => {
    const visibleContent = `<h3>${item.name}</h3>`;
    const hiddenContent = `
      ${renderStat('Location', item.location)}
      ${renderStat('Description', item.description)}
    `;

    const slug = generateSlug(item.name);
    const rarity = TEAMS[item.team];
    const rarityClass = rarity ? rarity.class : '';
    const rarityName = rarity ? rarity.name : '';
    const cardId = `card-${slug}-${Math.random().toString(36).substr(2, 9)}`;

    return `
      <div class="card">
        <img src="images/${slug}.png" alt="${item.name}" 
             style="width:100%; height:auto; margin-bottom:15px; border-radius:4px; 
                    box-shadow:0 0 10px rgba(255,255,255,0.2);">
        ${rarityName ? `<div class="rarity ${rarityClass}">${rarityName}</div>` : ''}
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
    { label: 'A-Z', value: 'az', onClick: "sortNPCs('az')" },
    { label: 'Z-A', value: 'za', onClick: "sortNPCs('za')" }
  ], order);

  return renderPage('NPCs', sortButtons, cards);
}

function sortNPCs(order) {
  document.getElementById("page-container").innerHTML = renderNPCs(order);
}