// sélectionner modal-btn, modal-overlay, close-btn
// Ecouter les évènements 'click' sur modal-btn et close-btn
// quand un utilisateur 'click' sur modal-btn ajouter .open-modal à modal-overlay
// quand un utilisateur 'click' sur close-btn supprimer .open-modal de modal-overlay

document.querySelector('.modal-btn').addEventListener('click', function () {
    document.querySelector('.modal-overlay').classList.add('open-modal');
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.modal-overlay').classList.remove('open-modal');
});

// Path: js\app.js