function renderLocations(order = "az") {
  const sorted = [...LOCATIONS_DATA].sort((a, b) =>
    order === "az"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  const cards = sorted.map(item => {
    const slug = generateSlug(item.name);
    const content = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;
    
    return `
      <div class="card">
        <img src="images/${slug}.jpg" alt="${item.name}" 
             style="width:100%; height:auto; margin-bottom:15px; border-radius:4px; 
                    box-shadow:0 0 10px rgba(255,255,255,0.2);">
        ${content}
      </div>`;
  });

  const sortButtons = renderSortButtons([
    { label: 'A-Z', value: 'az', onClick: "sortLocations('az')" },
    { label: 'Z-A', value: 'za', onClick: "sortLocations('za')" }
  ], order);

  return renderPage('LOCATIONs', sortButtons, cards);
}

function sortLocations(order) {
  document.getElementById("page-container").innerHTML = renderLocations(order);
}