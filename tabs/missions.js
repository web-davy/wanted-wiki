function formatReward(reward) {
  return reward.replace(/\$/g, '<img src="images/cash.png" alt="$" style="height: 16px; width: auto; vertical-align: middle; margin-right: 2px;">');
}

function renderMissions(order = "hard") {
  const sortedRegular = [...MISSIONS_DATA].sort((a, b) => {
    const diffA = DIFFICULTIES[a.difficulty];
    const diffB = DIFFICULTIES[b.difficulty];

    if (diffA.order === diffB.order) {
      const numA = parseInt(a.title) || 0;
      const numB = parseInt(b.title) || 0;
      if (numA !== 0 || numB !== 0) {
        return order === "hard" ? numB - numA : numA - numB;
      }
    }

    return order === "hard" ? diffB.order - diffA.order : diffA.order - diffB.order;
  });

  const sortedChristmas = [...CHRISTMAS_MISSIONS_DATA].sort((a, b) => {
    return 0;
  });

  const regularCards = sortedRegular.map(item => {
    const slug = item.id;
    const formattedRewards = item.rewards.map(formatReward).join(', ');

    const visibleContent = `<h3>${item.title}</h3>`;
    const hiddenContent = `
      ${renderStat('Location', item.location)}
      ${renderStat('Description', item.description)}
      ${renderStat('Requirements', item.requirements.join(', '))}
      ${renderStat('How', item.howToComplete)}
      ${renderStat('Reward', formattedRewards)}
    `;

    const rarity = DIFFICULTIES[item.difficulty];
    const rarityClass = rarity ? rarity.class : '';
    const rarityName = rarity ? rarity.name : '';
    const cardId = `card-${slug}-${Math.random().toString(36).substr(2, 9)}`;

    return `
      <div class="card">
        <img src="images/${slug}.jpg" alt="${item.title}" 
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

  const christmasCards = sortedChristmas.map(item => {
    const slug = item.id;
    const formattedRewards = item.rewards.map(formatReward).join(', ');

    const visibleContent = `<h3>${item.title}</h3>`;
    const hiddenContent = `
      ${renderStat('Location', item.location)}
      ${renderStat('Description', item.description)}
      ${renderStat('Requirements', item.requirements.join(', '))}
      ${renderStat('How', item.howToComplete)}
      ${renderStat('Reward', formattedRewards)}
    `;

    const rarity = DIFFICULTIES[item.difficulty];
    const rarityClass = rarity ? rarity.class : '';
    const rarityName = rarity ? rarity.name : '';
    const cardId = `card-${slug}-${Math.random().toString(36).substr(2, 9)}`;

    return `
      <div class="card">
        <img src="images/${slug}.jpg" alt="${item.title}" 
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
    { label: 'Hardest First', value: 'hard', onClick: "sortMissions('hard')" },
    { label: 'Easiest First', value: 'easy', onClick: "sortMissions('easy')" }
  ], order);

  const regularSection = `
    <div class="card-grid">
      ${regularCards.join('')}
    </div>
  `;

  const christmasSection = `
    <div style="margin: 40px 0; border-bottom: 2px solid #fff; opacity: 0.3;"></div>
    <div class="card-grid">
      ${christmasCards.join('')}
    </div>
  `;

  return `
    <h2>MISSIONs</h2>
    ${sortButtons}
    ${regularSection}
    ${christmasSection}
  `;
}

function sortMissions(order) {
  document.getElementById("page-container").innerHTML = renderMissions(order);
}