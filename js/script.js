/*****
    SNACK 1
*****/

// Creo un array di 5 bici con proprietà: nome e peso
let bikes = [
    {
        nome : 'BMC',
        peso : 110
    },
    {
        nome : 'Gazelle',
        peso : 95
    },
    {
        nome : 'Cipollini',
        peso : 100
    },
    {
        nome : 'Trek',
        peso : 90
    },
    {
        nome : 'Bergamont',
        peso : 120
    }
];


/*****
    SNACK 2
*****/


// Creo un array di squadre di calcio
const team = [
    {
        name : 'Roma',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        name : 'Napoli',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        name : 'Inter',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        name : 'Juventus',
        punti_fatti : 0,
        falli_subiti : 0
    },
];

console.log(team);

// Definisco i due array
let name_team = [];
let falli_subiti_team = [];

// Ciclo l'array di squadre
team.forEach((elem) => {
    // Genero casualmente i punti fatti dalle squadre
    elem.punti_fatti = Math.floor(Math.random() * 100 + 1);

    // Genero casualmente i falli subiti dalle squadre
    elem.falli_subiti = Math.floor(Math.random() * 500 + 1);

    // Uso la destrutturazione per riempire i due array dichiarati
    const {name, falli_subiti} = elem;
    name_team.push(name);
    falli_subiti_team.push(falli_subiti);
});
console.log(name_team, falli_subiti_team);


/*****
    SNACK 3
*****/


// Creo un array di oggetti rappresentanti articoli di moda
const article = [
    {
        articleName : 'Poppy',
        type : 'tshirt',
        color : 'red'
    },
    {
        articleName : 'Jumping',
        type : 'occhiali',
        color : 'blue'
    },
    {
        articleName : 'CrissCross',
        type : 'scarpe',
        color : 'black'
    },
    {
        articleName : 'Jenny',
        type : 'borsa',
        color : 'pink'
    }
];
