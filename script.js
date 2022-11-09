'use strict';
console.log('test')

const bookList = [
    //En array med 2 objekt varje objekt har ett id 
    {
        id: 1,
        author: 'Charles Dickens',
        title:'Oliver Twist'
    },
    {
        id: 2,
        author: 'William Shakespear',
        title: 'Hamlet'
    }
];

const searchInput = null;


//funktions uttryck
function handleKeyPress(input) {
    // Ta emot/läsa av värdert i fältet i input  
    // skicka det till en annan funktion searchBooks
    // searchBooks returnerar en filtrerad lista
    // Filtrerade listan skickas till renderlist

   searchBooks(input, bookList);
};

function searchBooks(searchTerm, bookList) {
//

}

function renderlist() {

}