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


