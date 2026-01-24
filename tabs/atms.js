function renderATMs(sort = "high") {
  const sorted = [...ATMS_DATA].sort((a, b) =>
    sort === "high" ? b.price - a.price : a.price - b.price
  );

  const cards = sorted.map(item => {
    const content = `
      <h3>${item.name}</h3>
      ${renderStat('Cash', formatPrice(item.price))}
    `;
    return renderCard(item, item.rarity, content);
  });

  const sortButtons = renderSortButtons([
    { label: 'High to Low', value: 'high', onClick: "sortATMs('high')" },
    { label: 'Low to High', value: 'low', onClick: "sortATMs('low')" }
  ], sort);

  return renderPage('ATMs', sortButtons, cards);
}

function sortATMs(order) {
  document.getElementById("page-container").innerHTML = renderATMs(order);
}