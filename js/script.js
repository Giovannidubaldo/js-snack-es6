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
        nome : 'Roma',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'Napoli',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'Inter',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'Juventus',
        punti_fatti : 0,
        falli_subiti : 0
    },
]

console.log(team);

// Ciclo l'array di squadre
team.forEach((elem) => {
    // Genero casualmente i punti fatti dalle squadre
    elem.punti_fatti = Math.floor(Math.random() * 100 + 1)
    console.log(elem.punti_fatti)

    // Genero casualmente i falli subiti dalle squadre
    elem.falli_subiti = Math.floor(Math.random() * 500 + 1)
    console.log(elem.falli_subiti)

})
