document.addEventListener('DOMContentLoaded', function () {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const nameDisplay = document.getElementById('nameDisplay');

    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        if (name !== '') {
            nameDisplay.innerHTML = `<h2>${name}</h2>`;
            nameInput.value = '';
        }
    });
});