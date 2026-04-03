function renderEvents() {
  const cards = EVENTS_DATA.map(event => {
    const visibleContent = `
      <h3>${event.title}</h3>
      <p>${event.description}</p>
    `;
    const hiddenContent = `
      <div style="margin-top: 15px;">
        <strong>Key Features:</strong>
        <ul style="margin-top: 10px; margin-left: 15px; list-style-type: square; opacity: 0.9;">
          ${event.features.map(f => `<li style="margin-bottom: 5px;">${f}</li>`).join('')}
        </ul>
      </div>
    `;
    return renderEventCard(event, visibleContent, hiddenContent, 'events');
  });

  return `
    <h2>GAME EVENTs</h2>
    <div class="card-grid">
      ${cards.join('')}
    </div>
  `;
}
