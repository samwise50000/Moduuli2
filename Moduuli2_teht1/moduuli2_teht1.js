'use script';

let numbers = [];

for (let i = 0; i < 5; i++)
{
    numbers[i] = parseInt(prompt('Give number ' + (i+1)));
}

for (let i = 4; i >= 0; i--){
    console.log(numbers[i])
}


