function renderNPCs(order = "az") {
  const sorted = [...NPCS_DATA].sort((a, b) =>
    order === "az" 
      ? a.name.localeCompare(b.name) 
      : b.name.localeCompare(a.name)
  );

  const cards = sorted.map(item => {
    const content = `
      <h3>${item.name}</h3>
      ${renderStat('Location', item.location)}
      ${renderStat('Description', item.description)}
    `;
    return renderCard(item, item.team, content);
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