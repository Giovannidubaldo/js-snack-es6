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

// Considero il peso della prima bici come il minore per metterlo a confronto con gli altri pesi
let bici_min = bikes[0];

// Ciclo l'array di bici
bikes.forEach((elem) => {
    // Confronto i due pesi
    if(elem.peso < bici_min.peso){
        bici_min = elem;
    }
});

// Uso destructuring per stampare il peso minore
let {nome, peso} = bici_min;
let result = `La bici più leggera è ${nome} e pesa ${peso}`
console.log(result);



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

// Creo una funzione che mi genera un numero compreso tra un valore minimo e massimo
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Definisco il nuovo array
let newTeam = [];

// Ciclo l'array di squadre
team.forEach((elem) => {
    // Genero casualmente i punti fatti dalle squadre
    elem.punti_fatti = randomNumber(20, 100);

    // Genero casualmente i falli subiti dalle squadre
    elem.falli_subiti = randomNumber(100, 200);

    // Uso la destrutturazione per riempire l'array dichiarato
    const {name, falli_subiti} = elem;

    let teams = {name, falli_subiti};

    newTeam.push(teams);
});

console.log(newTeam);



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

console.log(article);

// Funzione che genera lettere random
function randomLetter(){
    let alphabet = ['abcdefghijklmnopqrstuvwxyz'];
    let letter = alphabet[randomNumber(0, alphabet.length - 1)];

    return letter;
}

// Ciclo l'array di artcoli di moda
const newArticle = article.map((elem) => {
    let obj = {...elem, position: randomLetter};

    return obj;
})

console.log(newArticle);
