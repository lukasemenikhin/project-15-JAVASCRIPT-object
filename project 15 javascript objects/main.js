const avto = [
    'avto',
    'mgaloblishvili',
    2037 - 1991,
    'teacher',
    ['levani', 'salome', 'nikolozi', 'soso'],
    ['levani'],
];

// console.log(avto);

const avtoObj = {
    firstname: "avto",
    lastname: "mgaloblishvili",
    age: 2037 - 1991,
    job: "teacher",
    friends: ['levani', 'salome', 'nikolozi', 'soso']
}


const nameKey = "name";



const name = prompt('What do you want to know about Avto? firstname, lastname, age, job, friends');


if (avtoObj[name]) {
    console.log(avtoObj[name]);
} else {
    console.log('No information for this');
}


const obj = {
    firstname: "avto",
    lastname: "mgaloblishvili",
    age: 2037 - 1991,
    job: "teacher",
    friends: ['levani', 'salome', 'nikolozi', 'soso']
}



