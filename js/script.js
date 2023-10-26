/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo, (tableName)
nome dell'ospite,  (guestName)
posto occupato. (place)
Generiamo e stampiamo in console la lista per i segnaposto.
*/


const VipTable = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
];

/*
const table = VipTable.map((element, index) => {
    let i = {
        guestname: element,
        place : index + 1,
        tablename : 'TavoloVip'
    };
    return i;
});
console.log(table);
*/

//facciamo sedere sti poveri Maneskin:

const table = VipTable.map((element, index) => {
    let i;
    if(element === 'Maneskin') {
        i = {
            guestname: element,
            place01 : index +1,
            place02 : index +2,
            place03 : index +3,
            place04 : index +4,
            tablename : 'TavoloVip'
        };
    } else {
        i = {
            guestname: element,
            place : index + 1,
            tablename : 'TavoloVip'
        };
    }
    return i;
});
console.log(table);


/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78 
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96 
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50 
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
];

const namesStudents = students.map((el) => {
    return el.name.toUpperCase(); 
});
console.log(namesStudents);


const gradesStudents = students.filter((el) => {
    return el.grades > 70;
});
console.log(gradesStudents);

/*
const idsStudents = students.filter((el) => {
    return el.grades > 70 && el.id > 120;
});
console.log(idsStudents);
*/

//oppure:

const idsStudents = gradesStudents.filter((el) => {
    return el.id > 120;
});
console.log(idsStudents);


/*
Snack 03
a partire da un array di stringhe crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola
*/

const characters= ['pippo','pluto', 'paperino'];

const Characters = characters.map((el) => {
    return el.toUpperCase().charAt(0) + el.slice(1);
});

console.log(Characters);

/*
Snack 04
Crea un array di oggetti che rappresentano animali, ogni animale ha un nome, una famiglia ed una classe.
*/

const animals = [
    {
        nome: 'leone',
        famiglia: 'felinidi',
        classe: 'mammiferi'
    },
    {
        nome: 'anna',
        famiglia: 'canidi',
        classe: 'ovipara'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'gatto',
        famiglia: 'felinidi',
        classe: 'mammiferi'
    }
];

const mammals = animals.filter((el) => {
    return el.classe === 'mammiferi';
});
console.log(mammals);

/*
Snack 05 
crea un array di oggetti che rappresentano delle persone.
ogni persona ha un nome, un cognome e un'età.
Crea quindi un nuovo array inserendo, per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const people = [
    {
        nome:'Mariangiangiangela',
        cognome: 'Loca',
        eta: 12,
    },
    {
        nome:'Gemma',
        cognome: 'del Sud',
        eta: 23,
    },
    {
        nome:'Shiva',
        cognome: 'Zanicchi',
        eta: 55,
    },
    {
        nome:'Gigi',
        cognome: 'Proiettili',
        eta: 45,
    },
    {
        nome:'Heather',
        cognome: 'Paresi',
        eta: 32,
    }
];

let family = people.map((el) => {
    return `
    il suo nome è ${el.nome} ${el.cognome} e ha ${el.eta} anni, pertanto ${(el.eta > 18) ? 'può guidare' : 'non può guidare'}
    `;
});

console.log(family);


//25/10/2023
//snack 3
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/


const bikes = [
    {
        nome:'bici ganza',
        peso: 7
    },
    {
        nome:'graziella',
        peso: 6
    },
    {
        nome:'100% brumotti',
        peso: 5
    },
    {
        nome:'bici elettrica',
        peso: 10
    },
    {
        nome:'biciclettina',
        peso: 4
    },
    {
        nome:'monociclo',
        peso: 5
    }
];
console.log(bikes);

const [,,,,{
    nome,
    peso 
}] = bikes;

console.log(`la bici più leggera è: ${nome}  peso: ${peso}kg`);

let result = document.getElementById('app');
result.innerHTML = `la bici più leggera è: ${nome}  peso: ${peso}kg`;

bikes.sort((a,b) => {

    return a.peso - b.peso;
});
console.log(bikes);
//oppure:

const bicileggera = bici.sort((a,b)=> a.peso - b.peso);
bicileggera = [0];
console.log(bicileggera);
//voglio ridurre tutte le bici ad una sola:

const bicileggera = bikes.reduce((accumulator, element) =>{
    //un ternario: l'accumulatore: se il peso dell'element è minore a peso dell'accumulatore, è l'elemento, altrimenti è l'accumulatore 
    accumulator = element.peso < accumulator.peso ? element : accumulator;
    return accumulator
},bici[0]);

const {peso,nome} = bicileggera;
document.getElementById('app').innerHTML =
`
la bici più leggera è: ${nome}  peso: ${peso}kg
`;



/*
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const ftbTeam = [
    {
        player:'Marco dello Snack di prima',
        score: 0,
        fouls: 0
    },
    {
        player:'Sandrone',
        score: 0,
        fouls: 0
    },
    {
        player:'AnnaCane',
        score: 0,
        fouls: 0
    },
    {
        player:'Un Frigorifero',
        score: 0,
        fouls: 0
    },
    {
        player:'I Celestini',
        score: 0,
        fouls: 0
    },
    {
        player:'I flauti Mulino bianco',
        score: 0,
        fouls: 0
    },
    {
        player:'la Signora di sotto',
        score: 0,
        fouls: 0
    }
];


const ftbTeamPoints = ftbTeam.map((el) => {
    el.score = getRndInteger(1,50);
    el.fouls = getRndInteger(1,50);
    return el;
});
console.log(ftbTeamPoints);

/*
for(let [{name: a,fouls: b}] of ftbTeamPoints) {
    console.log(`nome: ${a}, falli subiti: ${b}`);
};
*/
footbal = document.getElementById('footbal');

for(let val of ftbTeamPoints) {
    console.log(val.player, val.fouls);
    footbal.innerHTML += `${val.player}, ${val.fouls} <br>`;
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


