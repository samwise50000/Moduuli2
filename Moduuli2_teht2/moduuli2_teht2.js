'use script';
let target = document.querySelector('#target');

// Kysytään osanottajien määrä
let nof_p = parseInt(prompt('How many participants?'));
let participants = [];

// Luetaan osanottajien nimet
for (let i = 0; i < nof_p; i++)
{
participants[i] = prompt('Name: ');
}

// Generoidaan html-lista osanottajien nimistä
let html_lista = '<ol>';
for (let i = 0; i < nof_p; i++)
{
    html_lista += '<li>';
    html_lista += participants[i];
    html_lista += '</li>';
}

html_lista += '</ol>';

// Lisätään generoitu html sivulle
target.innerHTML = html_lista
