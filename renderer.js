function renderCard(item, rarityKey, content, folder = null) {
  const name = item.name || item.title || "";
  const slug = item.id || generateSlug(name);
  const rarity = RARITIES[rarityKey] || DIFFICULTIES[rarityKey] || TEAMS[rarityKey];
  const rarityClass = rarity ? rarity.class : '';
  const rarityName = rarity ? rarity.name : '';
  const imagePath = folder ? `images/${folder}/${slug}.png` : `images/${slug}.png`;

  return `
    <div class="card">
      <img src="${imagePath}" alt="${name}" loading="lazy" 
           style="width:100%; height:auto; margin-bottom:15px; border-radius:4px; 
                  box-shadow:0 0 10px rgba(255,255,255,0.2);">
      ${rarityName ? `<div class="rarity ${rarityClass}">${rarityName}</div>` : ''}
      ${content}
    </div>`;
}

function renderCardJPG(item, rarityKey, content, folder = null) {
  const name = item.name || item.title || "";
  const slug = item.id || generateSlug(name);
  const rarity = RARITIES[rarityKey] || DIFFICULTIES[rarityKey] || TEAMS[rarityKey];
  const rarityClass = rarity ? rarity.class : '';
  const rarityName = rarity ? rarity.name : '';
  const imagePath = folder ? `images/${folder}/${slug}.jpg` : `images/${slug}.jpg`;

  return `
    <div class="card">
      <img src="${imagePath}" alt="${name}" loading="lazy" 
           style="width:100%; height:auto; margin-bottom:15px; border-radius:4px; 
                  box-shadow:0 0 10px rgba(255,255,255,0.2);">
      ${rarityName ? `<div class="rarity ${rarityClass}">${rarityName}</div>` : ''}
      ${content}
    </div>`;
}

function renderPriceTag(price) {
  return `<div class="price-tag">${formatPrice(price)}</div>`;
}

function renderSortButtons(buttons, activeSort) {
  return `
    <div class="sort-buttons">
      ${buttons.map(btn => `
        <span class="sort-btn ${activeSort === btn.value ? 'active' : ''}" 
              onclick="${btn.onClick}">
          ${btn.label}
        </span>
      `).join('')}
    </div>`;
}

function renderPage(title, sortButtons, cards, disclaimer = null) {
  return `
    <h2>${title}</h2>
    ${disclaimer ? `<div class="page-disclaimer">${disclaimer}</div>` : ''}
    ${sortButtons}
    <div class="card-grid">
      ${cards.join('')}
    </div>`;
}

function renderStat(label, value) {
  if (value === undefined || value === null || value === '' || value === '?' || value === '? - ?') return '';
  return `<p><strong>${label}:</strong> ${value}</p>`;
}

function renderExpandableCard(item, rarityKey, visibleContent, hiddenContent, ext = 'jpg', folder = null) {
  const name = item.name || item.title || "";
  const slug = item.id || generateSlug(name);
  const rarity = RARITIES[rarityKey] || DIFFICULTIES[rarityKey] || TEAMS[rarityKey];
  const rarityClass = rarity ? rarity.class : '';
  const rarityName = rarity ? rarity.name : '';
  const cardId = `card-${slug}-${Math.random().toString(36).substr(2, 9)}`;
  const showButton = item.showMoreButton !== false && hiddenContent && hiddenContent.trim() !== '';
  const imagePath = folder ? `images/${folder}/${slug}.${ext}` : `images/${slug}.${ext}`;

  return `
    <div class="card">
      <img src="${imagePath}" alt="${item.name}" loading="lazy" 
           style="width:100%; height:auto; margin-bottom:15px; border-radius:4px; 
                  box-shadow:0 0 10px rgba(255,255,255,0.2);">
      ${rarityName ? `<div class="rarity ${rarityClass}">${rarityName}</div>` : ''}
      ${visibleContent}
      ${hiddenContent && hiddenContent.trim() !== '' ? `
      <div class="card-details ${showButton ? 'collapsed' : ''}" id="${cardId}-details">
        ${hiddenContent}
      </div>` : ''}
      ${showButton ? `
      <button class="card-details-toggle" onclick="toggleCardDetails('${cardId}', this)">
        Show more...
      </button>` : ''}
    </div>`;
}

function renderExpandableCardJPG(item, rarityKey, visibleContent, hiddenContent, folder = null) {
  return renderExpandableCard(item, rarityKey, visibleContent, hiddenContent, 'jpg', folder);
}

function renderExpandableCardPNG(item, rarityKey, visibleContent, hiddenContent, folder = null) {
  return renderExpandableCard(item, rarityKey, visibleContent, hiddenContent, 'png', folder);
}

function toggleWeaponMods(btn) {
  const card = btn.closest('.card');
  if (!card) return;
  const front = card.querySelector('.weapon-front-content');
  const overlay = card.querySelector('.weapon-mods-overlay');
  if (front && overlay) {
    front.classList.toggle('hidden');
    overlay.classList.toggle('active');
  }
}

function toggleAttachmentCategory(headerEl) {
  const group = headerEl.closest('.attachment-group');
  if (group) group.classList.toggle('open');
}

function renderWeaponCard(item, rarityKey, visibleContent, hiddenContent, folder = 'weapons') {
  const name = item.name || item.title || "";
  const slug = item.id || generateSlug(name);
  const hasAttachments = item.attachments && Object.keys(item.attachments).length > 0;
  const cardId = `card-${slug}-${Math.random().toString(36).substr(2, 9)}`;
  const showButton = item.showMoreButton !== false && hiddenContent && hiddenContent.trim() !== '';
  const imagePath = folder ? `images/${folder}/${slug}.jpg` : `images/${slug}.jpg`;

  if (!hasAttachments) {
    return renderExpandableCardJPG(item, rarityKey, visibleContent, hiddenContent, folder);
  }

  const categoryIcons = { Optics: '', Muzzle: '', Underbarrel: '', Tactical: '', Ammunition: '', Stock: '' };

  const attachmentsHTML = Object.entries(item.attachments).map(([category, items]) => {
    if (!items || items.length === 0) return '';
    const itemsHTML = items.map(att => `
      <div class="weapon-mod-item">
        <span class="weapon-mod-name">${att.name}</span>
        <span class="weapon-mod-price">${att.price === 0 ? '<span style="color:#666">Free</span>' : formatPrice(att.price)}</span>
      </div>
    `).join('');
    const icon = categoryIcons[category] || '●';
    return `
      <div class="attachment-group">
        <div class="attachment-category-header" onclick="toggleAttachmentCategory(this)">
          <span>${category}</span>
          <span class="attachment-chevron">▼</span>
        </div>
        <div class="attachment-category-items">
          ${itemsHTML}
        </div>
      </div>
    `;
  }).join('');

  return `
  <div class="card">
    ${renderPriceTag(item.contractPrice)}
    <button class="weapon-mods-button" onclick="toggleWeaponMods(this)">ATTACHMENTS</button>
    <img src="${imagePath}" alt="${name}" loading="lazy"
         style="width:100%; height:auto; margin-bottom:15px; border-radius:4px;
                box-shadow:0 0 10px rgba(255,255,255,0.2);">
    <div class="weapon-front-content">
      ${visibleContent}
      ${showButton ? `
      <div class="card-details collapsed" id="${cardId}-details">
        ${hiddenContent}
      </div>
      <button class="card-details-toggle" onclick="toggleCardDetails('${cardId}', this)">Show more...</button>
      ` : ''}
    </div>
    <div class="weapon-mods-overlay">
      <div class="weapon-mods-title">${name} ATTACHMENTS</div>
      <div class="weapon-mods-list">
        ${attachmentsHTML}
      </div>
    </div>
  </div>`;
}
