function renderValuables(sort = "high") {
  const sorted = [...VALUABLES_DATA].sort((a, b) => {
    const priceA = a.priceNonContract ? 0 : a.price;
    const priceB = b.priceNonContract ? 0 : b.price;
    
    if (priceA > 0 && priceB > 0) {
      return sort === "high" ? priceB - priceA : priceA - priceB;
    }
    if (priceA > 0) return -1;
    if (priceB > 0) return 1;
    
    return sort === "high" ? b.price - a.price : a.price - b.price;
  });

  const cards = sorted.map(item => {
    const content = `
      <h3>${item.name}</h3>
      ${renderStat('Price', formatPrice(item.price))}
      ${renderStat('Weight', `${item.weight} kg`)}
    `;
    return renderCard(item, item.rarity, content);
  });

  const sortButtons = renderSortButtons([
    { label: 'Price High to Low', value: 'high', onClick: "sortValuables('high')" },
    { label: 'Price Low to High', value: 'low', onClick: "sortValuables('low')" }
  ], sort);

  return renderPage('VALUABLEs', sortButtons, cards);
}

function sortValuables(order) {
  document.getElementById("page-container").innerHTML = renderValuables(order);
}