'use script';
let target = document.querySelector('#target')
let dogs_amount = 6
let dogs = []
for(let i = 0; i < dogs_amount; i++){
    dogs[i]= prompt('Give dog name')

}
let sorted_dogs = dogs.sort()
let r_sorted_dogs = sorted_dogs.reverse()
// Generoidaan html-lista koirien nimistä
let html = '<ul>';
for(let i = 0; i < 6; i++){
    html += '<li>';
    html += r_sorted_dogs[i];
    html += '</li>';
}
html += '</ul>';
target.innerHTML = html