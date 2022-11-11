'use script';

let nof_candi = parseInt(prompt('Number of candidates?'));
let candidates_list = [];

for (let i = 0; i < nof_candi; i++) {

    let cand_name = prompt('Name for candidate ' + (i + 1));

    let candidate =
        {
        name: cand_name,
        votes: 0


    }
    candidates_list.push(candidate);
}

console.log(candidates_list)