'use script';


const names = ['Frank', 'Scott', 'Jasmine', 'Don'];

for (let i = 0; i < names.length; i++) {
    console.log(`Name: ${names[i]}`);
}

for (let name of names) {
    console.log(` ${name}`);
}

const student = {
    firstName: 'Greg',
    lastName: 'Focker',
    studentId: '234359',
    phone: '040 5902123',
}
console.log(student)

function greet() {
    console.log('Well, hello!');
    return;
}

greet();




