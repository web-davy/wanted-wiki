function renderGunCrates(sort = "a-z") {
  let sorted = [...GUN_CRATES_DATA];

  if (sort === "a-z") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "z-a") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  }

  const cards = sorted.map(item => {
    const visibleContent = `<h3>${item.name}</h3>`;
    const hiddenContent  = `
      ${renderStat(t('stat_content'),  item.gun)}
      ${renderStat(t('stat_location'), item.location)}
    `;
    return renderExpandableCardJPG(item, null, visibleContent, hiddenContent, 'crates');
  });

  const sortButtons = renderSortButtons([
    { label: t('sort_az'), value: 'a-z', onClick: "sortGunCrates('a-z')" },
    { label: t('sort_za'), value: 'z-a', onClick: "sortGunCrates('z-a')" }
  ], sort);

  return renderPage(t('page_gun_crates'), sortButtons, cards);
}

function sortGunCrates(order) {
  document.getElementById("page-container").innerHTML = renderGunCrates(order);
}