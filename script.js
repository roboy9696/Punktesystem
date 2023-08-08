const openPopupButton = document.getElementById('open-add-player-popup');
const closePopupButton = document.getElementById('close-add-player-popup');
const popup = document.getElementById('add-player-popup');
const addPlayerForm = document.getElementById('add-player-form-popup');

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

addPlayerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('first-name-popup').value;
    const lastName = document.getElementById('last-name-popup').value;
    const reason = document.getElementById('reason-popup').value;
    const points = document.getElementById('points-popup').value;

    // Hier kannst du die erhaltenen Daten verarbeiten
    // Zum Beispiel, um einen neuen Spieler zur Liste hinzuzufügen

    // Nach der Verarbeitung kannst du das Formular zurücksetzen und das Popup schließen
    addPlayerForm.reset();
    popup.style.display = 'none';
});
